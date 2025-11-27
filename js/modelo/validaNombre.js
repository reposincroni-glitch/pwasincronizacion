/**
 * @param {string} nombre
 */
export function validaNombre(nombre) {
 if (typeof nombre !== "string" || nombre.trim() === "")
  throw new Error("Falta el nombre.")
}

/**
 * @param {string} asignatura
 */
export function validaAsignatura(asignatura) {
 if (typeof asignatura !== "string" || asignatura.trim() === "")
  throw new Error("Falta la matricula.")
}

/**
 * @param {string} turno
 */
export function validaTurno(turno) {
 if (typeof turno !== "string" || turno.trim() === "")
  throw new Error("Falta el grupo.")
}
