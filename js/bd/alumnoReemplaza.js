import { bdEjecuta } from "../../lib/js/bdEjecuta.js"
import { ALMACEN_ALUMNO, Bd } from "./Bd.js"

/**
 * Borra el contenido del almacén ALUMNO y guarda nuevos alumnos.
 * @param {import("../modelo/ALUMNO.js").ALUMNO[]} nuevosAlumnos
 */
export async function alumnosReemplaza(nuevosAlumnos) {
 return bdEjecuta(Bd, [ALMACEN_ALUMNO], transaccion => {
  const almacenAlumno = transaccion.objectStore(ALMACEN_ALUMNO)
  almacenAlumno.clear()
  for (const objeto of nuevosAlumnos) {
   almacenAlumno.add(objeto)
  }
 })
}
