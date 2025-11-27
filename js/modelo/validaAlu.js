/**
 * @param {any} objeto
 * @returns {import("./ALUMNO.js").ALUMNO}
 */
export function validaAlumno(objeto) {

  if (typeof objeto.ALU_ID !== "string" || objeto.ALU_ID === "")
    throw new Error("El id debe ser texto y no puede estar vacío.")

  if (typeof objeto.ALU_NOMBRE !== "string" || objeto.ALU_NOMBRE === "")
    throw new Error("El nombre debe ser texto y no puede estar vacío.")

  if (typeof objeto.ALU_ASIGNATURA !== "string" || objeto.ALU_ASIGNATURA === "")
    throw new Error("La matricula debe ser texto y no puede estar vacía.")

  if (typeof objeto.ALU_TURNO !== "string" || objeto.ALU_TURNO === "")
    throw new Error("El grupo debe ser texto y no puede estar vacío.")

  if (typeof objeto.ALU_MODIFICACION !== "number")
    throw new Error("El campo modificacion debe ser número.")

  if (typeof objeto.ALU_ELIMINADO !== "number")
    throw new Error("El campo eliminado debe ser número.")

  return objeto
}
