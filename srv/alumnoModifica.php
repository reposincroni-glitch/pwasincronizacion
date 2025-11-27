<?php

require_once __DIR__ . "/../lib/php/validaNombre.php";
require_once __DIR__ . "/../lib/php/update.php";
require_once __DIR__ . "/bd/Bd.php";
require_once __DIR__ . "/modelo/TABLA_ALUMNOS.php";
require_once __DIR__ . "/modelo/validaId.php";

/**
 * @param array{
 *   ALU_ID: string,
 *   ALU_NOMBRE: string,
 *   ALU_ASIGNATURA: string,
 *   ALU_TURNO: string,
 *   ALU_MODIFICACION: int,
 *   ALU_ELIMINADO: int
 *  } $modelo
 */
function alumnoModifica(array $modelo)
{
 validaId($modelo[ALU_ID]);
 validaNombre($modelo[ALU_NOMBRE]);
 // Valida asignatura y turno si tienes esas funciones
 update(
  pdo: Bd::pdo(),
  table: 'ALUMNOS',
  set: $modelo,
  where: [ALU_ID => $modelo[ALU_ID]]
 );
}
