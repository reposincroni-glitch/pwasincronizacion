<?php

require_once __DIR__ . "/../lib/php/ejecutaServicio.php";
require_once __DIR__ . "/../lib/php/recuperaJson.php";
require_once __DIR__ . "/../lib/php/devuelveJson.php";
require_once __DIR__ . "/../lib/php/ProblemDetails.php";
require_once __DIR__ . "/../lib/php/devuelveProblemDetails.php";
require_once __DIR__ . "/../lib/php/devuelveErrorInterno.php";
require_once __DIR__ . "/modelo/TABLA_ALUMNOS.php";
require_once __DIR__ . "/modelo/validaAlumno.php";
require_once __DIR__ . "/alumnoAgrega.php";
require_once __DIR__ . "/alumnoBusca.php";
require_once __DIR__ . "/alumnoConsultaNoEliminados.php";
require_once __DIR__ . "/alumnoModifica.php";

ejecutaServicio(function () {

 $lista = recuperaJson();

 if (!is_array($lista)) {
  $lista = [];
 }

 foreach ($lista as $modelo) {
  $modeloEnElCliente = validaAlumno($modelo);
  $modeloEnElServidor = alumnoBusca($modeloEnElCliente[ALU_ID]);

  if ($modeloEnElServidor === false) {

   /* CONFLICTO: El modelo no ha estado en el servidor.
    * AGREGARLO solamente si no está eliminado. */
   if ($modeloEnElCliente[ALU_ELIMINADO] === 0) {
    alumnoAgrega($modeloEnElCliente);
   }
  } elseif (
   $modeloEnElServidor[ALU_ELIMINADO] === 0
   && $modeloEnElCliente[ALU_ELIMINADO] === 1
  ) {

   /* CONFLICTO: El registro está en el servidor, donde no se ha eliminado, pero
    * ha sido eliminado en el cliente.
    * Gana el cliente, porque optamos por no revivir lo eliminado. */
   alumnoModifica($modeloEnElCliente);
  } else if (
   $modeloEnElCliente[ALU_ELIMINADO] === 0
   && $modeloEnElServidor[ALU_ELIMINADO] === 0
  ) {

   /* CONFLICTO: Registros en el servidor y en el cliente. Pueden ser
    * diferentes.
    * GANA FECHA MÁS GRANDE. Cuando gana el servidor, no se hace nada. */
   if (
    $modeloEnElCliente[ALU_MODIFICACION] >
    $modeloEnElServidor[ALU_MODIFICACION]
   ) {
    // La versión del cliente es más nueva y prevalece.
    alumnoModifica($modeloEnElCliente);
   }
  }
 }

 $lista = alumnoConsultaNoEliminados();

 devuelveJson($lista);
});
