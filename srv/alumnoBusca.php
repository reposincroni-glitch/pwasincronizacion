<?php

require_once __DIR__ . "/../lib/php/selectFirst.php";
require_once __DIR__ . "/bd/Bd.php";
require_once __DIR__ . "/modelo/TABLA_ALUMNOS.php";

/**
 * @return false | array{
 *   ALU_ID: string,
 *   ALU_NOMBRE: string,
 *   ALU_ASIGNATURA: string,
 *   ALU_TURNO: string,
 *   ALU_MODIFICACION: int,
 *   ALU_ELIMINADO: int
 *  }
 */
function alumnoBusca(string $id): false|array
{
 return selectFirst(
  pdo: Bd::pdo(),
  from: 'ALUMNOS',
  where: [ALU_ID => $id]
 );
}
