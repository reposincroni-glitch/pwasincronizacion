import { validaAlumno } from "./validaAlu.js"

/**
 * @param {any} objetos
 * @returns {import("./ALUMNO.js").ALUMNO[]}
 */
export function validaAlumnos(objetos) {
  if (!Array.isArray(objetos))
    throw new Error("No se recibió un arreglo.")

  /**
   * @type {import("./ALUMNO.js").ALUMNO[]}
   */
  const arreglo = []
  for (const objeto of objetos) {
    arreglo.push(validaAlumno(objeto))
  }
  return arreglo
}
