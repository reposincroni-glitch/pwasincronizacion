import { enviaJson } from "../lib/js/enviaJson.js"
import { exportaAHtml } from "../lib/js/exportaAHtml.js"
import { muestraError } from "../lib/js/muestraError.js"
import { alumnoConsultaTodos } from "./bd/alumnoConsultaTodos.js"
import { alumnosReemplaza } from "./bd/alumnoReemplaza.js"
import { esperaUnPocoYSincroniza } from "./esperaUnPocoYSincroniza.js"
import { validaAlumnos } from "./modelo/validaAlumnos.js"
import { renderiza } from "./renderiza.js"

/**
 * @param {HTMLUListElement} lista
 */
export async function sincroniza(lista) {
 try {
  if (navigator.onLine) {
   const todos = await alumnoConsultaTodos()
   const respuesta = await enviaJson("srv/sincroniza.php", todos)
   const alumnos = validaAlumnos(respuesta.body)
   await alumnosReemplaza(alumnos)
   renderiza(lista, alumnos)
  }
 } catch (error) {
  muestraError(error)
 }
 esperaUnPocoYSincroniza(lista)
}

exportaAHtml(sincroniza)
