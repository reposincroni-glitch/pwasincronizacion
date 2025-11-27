import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"
import { ALMACEN_ALUMNO, Bd } from "./Bd.js"
import { alumnoBusca } from "./alumnoBusca.js"

/**
 * @param { string } id
 */
export async function alumnoElimina(id) {
 const modelo = await alumnoBusca(id)
 if (modelo !== undefined) {
  modelo.ALU_MODIFICACION = Date.now()
  modelo.ALU_ELIMINADO = 1
  return bdEjecuta(Bd, [ALMACEN_ALUMNO], transaccion => {
   const almacenAlumno = transaccion.objectStore(ALMACEN_ALUMNO)
   almacenAlumno.put(modelo)
  })
 }
}

exportaAHtml(alumnoElimina)
