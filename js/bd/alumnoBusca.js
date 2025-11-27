import { bdConsulta } from "../../lib/js/bdConsulta.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"
import { validaAlumno } from "../modelo/validaAlu.js"
import { ALMACEN_ALUMNO, Bd } from "./Bd.js"

/**
 * @param {string} id
 */
export async function alumnoBusca(id) {

 return bdConsulta(Bd, [ALMACEN_ALUMNO],
  /**
   * @param {(resultado: import("../modelo/ALUMNO.js").ALUMNO|undefined)
   *                                                            => any} resolve 
   */
  (transaccion, resolve) => {

   /* Pide el primer objeto de ALMACEN_ALUMNO que tenga como llave
    * primaria el valor del parámetro id. */
   const consulta = transaccion.objectStore(ALMACEN_ALUMNO).get(id)

   // onsuccess se invoca solo una vez, devolviendo el objeto solicitado.
   consulta.onsuccess = () => {
    /* Se recupera el objeto solicitado usando
     *  consulta.result
     * Si el objeto no se encuentra se recupera undefined. */
    const objeto = consulta.result
    if (objeto !== undefined) {
     const modelo = validaAlumno(objeto)
     if (modelo.ALU_ELIMINADO === 0) {
      resolve(modelo)
      return
     }
    }
    resolve(undefined)

   }

  })

}

exportaAHtml(alumnoBusca)
