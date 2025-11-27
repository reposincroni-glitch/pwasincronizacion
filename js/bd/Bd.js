export const ALMACEN_ALUMNO = "ALUMNOS"
export const ALU_ID = "ALU_ID"
export const INDICE_NOMBRE = "INDICE_NOMBRE"
export const ALU_NOMBRE = "ALU_NOMBRE"
const BD_NOMBRE = "sincronizacion"
const BD_VERSION = 1

/** @type { Promise<IDBDatabase> } */
export const Bd = new Promise((resolve, reject) => {

 /* Se solicita abrir la base de datos, indicando nombre y
  * número de versión. */
 const solicitud = indexedDB.open(BD_NOMBRE, BD_VERSION)

 // Si se presenta un error, rechaza la promesa.
 solicitud.onerror = () => reject(solicitud.error)

 // Si se abre con éxito, devuelve una conexión a la base de datos.
 solicitud.onsuccess = () => resolve(solicitud.result)

 // Si es necesario, se inicia una transacción para cambio de versión.
 solicitud.onupgradeneeded = () => {

  const bd = solicitud.result

  // Como hay cambio de versión, borra el almacén si es que existe.
  if (bd.objectStoreNames.contains(ALMACEN_ALUMNO)) {
   bd.deleteObjectStore(ALMACEN_ALUMNO)
  }

  // Crea el almacén "ALUMNOS" con el campo llave "ALU_ID".
  const almacenAlumno =
   bd.createObjectStore(ALMACEN_ALUMNO, { keyPath: ALU_ID })

  // Crea un índice ordenado por el campo "ALU_NOMBRE" que no acepta duplicados.
  almacenAlumno.createIndex(INDICE_NOMBRE, ALU_NOMBRE)
 }

})
