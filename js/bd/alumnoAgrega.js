import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { creaIdCliente } from "../../lib/js/creaIdCliente.js"
import { ALMACEN_ALUMNO, Bd } from "./Bd.js"
import { validaNombre } from "../modelo/validaNombre.js"
import { exportaAHtml } from "../../lib/js/exportaAHtml.js"

/**
 * @param {import("../modelo/ALUMNO.js").ALUMNO} modelo
 */
export async function alumnoAgrega(modelo) {
 validaNombre(modelo.ALU_NOMBRE)
 modelo.ALU_MODIFICACION = Date.now()
 modelo.ALU_ELIMINADO = 0
 // Genera id único en internet.
 modelo.ALU_ID = creaIdCliente(Date.now().toString())
 return bdEjecuta(Bd, [ALMACEN_ALUMNO], transaccion => {
  const almacenAlumno = transaccion.objectStore(ALMACEN_ALUMNO)
  almacenAlumno.add(modelo)
 })
}

exportaAHtml(alumnoAgrega)
