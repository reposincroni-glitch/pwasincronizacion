<?php

require_once __DIR__ . "/../../lib/php/BAD_REQUEST.php";
require_once __DIR__ . "/../../lib/php/validaJson.php";
require_once __DIR__ . "/../../lib/php/ProblemDetails.php";
require_once __DIR__ . "/TABLA_ALUMNOS.php";

function validaAlumno($objeto)
{
 $objeto = validaJson($objeto);

 if (!isset($objeto->ALU_ID) || !is_string($objeto->ALU_ID))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El id debe ser texto.",
   type: "/error/idincorrecto.html",
  );

 if (!isset($objeto->ALU_NOMBRE) || !is_string($objeto->ALU_NOMBRE))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El nombre debe ser texto.",
   type: "/error/nombreincorrecto.html",
  );

 if (!isset($objeto->ALU_ASIGNATURA) || !is_string($objeto->ALU_ASIGNATURA))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "La asignatura debe ser texto.",
   type: "/error/asignaturaincorrecta.html",
  );

 if (!isset($objeto->ALU_TURNO) || !is_string($objeto->ALU_TURNO))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El turno debe ser texto.",
   type: "/error/turnoincorrecto.html",
  );

 if (!isset($objeto->ALU_MODIFICACION)  || !is_int($objeto->ALU_MODIFICACION))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "La modificacion debe ser número.",
   type: "/error/modificacionincorrecta.html",
  );

 if (!isset($objeto->ALU_ELIMINADO) || !is_int($objeto->ALU_ELIMINADO))
  throw new ProblemDetails(
   status: BAD_REQUEST,
   title: "El campo eliminado debe ser entero.",
   type: "/error/eliminadoincorrecto.html",
  );

 return [
  ALU_ID => $objeto->ALU_ID,
  ALU_NOMBRE => $objeto->ALU_NOMBRE,
  ALU_ASIGNATURA => $objeto->ALU_ASIGNATURA,
  ALU_TURNO => $objeto->ALU_TURNO,
  ALU_MODIFICACION => $objeto->ALU_MODIFICACION,
  ALU_ELIMINADO => $objeto->ALU_ELIMINADO
 ];
}
