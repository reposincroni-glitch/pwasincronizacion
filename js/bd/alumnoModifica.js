import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"
import { validaId } from "../modelo/validaId.js"
import { validaNombre } from "../modelo/validaNombre.js"
import { ALMACEN_ALUMNO, Bd } from "./Bd.js"
import { alumnoBusca } from "./alumnoBusca.js"

/**
 * @param { import("../modelo/ALUMNO.js").ALUMNO } modelo
 */
export async function alumnoModifica(modelo) {
 validaNombre(modelo.ALU_NOMBRE)
 if (modelo.ALU_ID === undefined)
  throw new Error(`Falta ALU_ID de ${modelo.ALU_NOMBRE}.`)
 validaId(modelo.ALU_ID)
 const anterior = await alumnoBusca(modelo.ALU_ID)
 if (anterior !== undefined) {
  modelo.ALU_MODIFICACION = Date.now()
  modelo.ALU_ELIMINADO = 0
  return bdEjecuta(Bd, [ALMACEN_ALUMNO], transaccion => {
   const almacenAlumno = transaccion.objectStore(ALMACEN_ALUMNO)
   almacenAlumno.put(modelo)
  })
 }
}

exportaAHtml(alumnoModifica)
