<?php

require_once __DIR__ . "/../lib/php/select.php";
require_once __DIR__ . "/bd/Bd.php";
require_once __DIR__ . "/modelo/TABLA_ALUMNOS.php";

/**
 * @return array{
 *   ALU_ID: string,
 *   ALU_NOMBRE: string,
 *   ALU_ASIGNATURA: string,
 *   ALU_TURNO: string,
 *   ALU_MODIFICACION: int,
 *   ALU_ELIMINADO: int
 *  }[]
 */
function alumnoConsultaNoEliminados()
{
 return select(
  pdo: Bd::pdo(),
  from: 'ALUMNOS',
  where: [ALU_ELIMINADO => 0],
  orderBy: ALU_NOMBRE
 );
}
