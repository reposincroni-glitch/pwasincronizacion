<?php

require_once __DIR__ . "/../lib/php/validaNombre.php";
require_once __DIR__ . "/../lib/php/insert.php";
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
function alumnoAgrega(array $modelo)
{
 validaId($modelo[ALU_ID]);
 validaNombre($modelo[ALU_NOMBRE]);
 // Aquí si quieres, valida asignatura y turno con nuevas funciones
 insert(pdo: Bd::pdo(), into: 'ALUMNOS', values: $modelo);
}
