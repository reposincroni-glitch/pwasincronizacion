<?php

class Bd
{

 private static ?PDO $pdo = null;

 static function pdo(): PDO
 {
  if (self::$pdo === null) {
   self::$pdo = new PDO(
    // cadena de conexión
    "sqlite:sincronizacion.db",
    // usuario
    null,
    // contraseña
    null,
    // Opciones: pdos no persistentes y lanza excepciones.
    [PDO::ATTR_PERSISTENT => false, PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION]
   );

self::$pdo->exec(
  'CREATE TABLE IF NOT EXISTS ALUMNOS (
    ALU_ID TEXT NOT NULL,
    ALU_NOMBRE TEXT NOT NULL,
    ALU_ASIGNATURA TEXT NOT NULL,
    ALU_TURNO TEXT NOT NULL,
    ALU_MODIFICACION INTEGER NOT NULL,
    ALU_ELIMINADO INTEGER NOT NULL,
    CONSTRAINT ALU_PK PRIMARY KEY(ALU_ID),
    CONSTRAINT ALU_ID_NV CHECK(LENGTH(ALU_ID) > 0),
    CONSTRAINT ALU_NOMBRE_NV CHECK(LENGTH(ALU_NOMBRE) > 0),
    CONSTRAINT ALU_ASIGNATURA_NV CHECK(LENGTH(ALU_ASIGNATURA) > 0),
    CONSTRAINT ALU_TURNO_NV CHECK(LENGTH(ALU_TURNO) > 0)
  )'
);


  }

  return self::$pdo;
 }
}
