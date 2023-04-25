CREATE TABLE `test`.`remito` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `instancia_id` INT NOT NULL,
   `linea` INT NOT NULL,
   `pliego` VARCHAR(255) NOT NULL,
   `solicitante` VARCHAR(255) NOT NULL,
   `remito` VARCHAR(255) NOT NULL,
   `fecha` VARCHAR(255) NOT NULL,
   `servicio` VARCHAR(255) NOT NULL,
   `cantidad` VARCHAR(255) NOT NULL,
   `orden_compra_id` INT NOT NULL,
   `periodo_id` INT NOT NULL,
   `created_at` DATETIME NOT NULL,
   `updated_at` DATETIME NOT NULL,
   `deleted_at` DATETIME NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE `test`.`orden_compra` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `descripcion` VARCHAR(255) NOT NULL,
   `fecha` DATETIME NOT NULL,
   `ejercicio` VARCHAR(255) NOT NULL,
   `numero` INT NOT NULL,
   `proveedor_id` INT NOT NULL,
   `pliego_id` INT NOT NULL,
   `lastuser_id` INT NOT NULL,
   `fecha_emision` DATETIME NOT NULL,
   `created_at` DATETIME NOT NULL,
   `updated_at` DATETIME NOT NULL,
   `deleted_at` DATETIME NOT NULL,
   `version` INT NOT NULL,
   `solicitud` INT NOT NULL CHECK(solicitud IN (0, 1)),
   PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;

CREATE TABLE `test`.`proveedor` (
   `id` INT NOT NULL AUTO_INCREMENT,
   `nombre` VARCHAR(255) NOT NULL,
   `cuit` INT NOT NULL,
   `razon_social` VARCHAR(255) NOT NULL,
   `numero` INT NOT NULL,
   `fecha` DATETIME NOT NULL,
   `ejercicio` VARCHAR(255) NOT NULL,
   `pisoydepto` VARCHAR(255) NOT NULL,
   `telefono` INT NOT NULL,
   `calle` VARCHAR(255) NOT NULL,
   `email` VARCHAR(255) NOT NULL,
   `email_secundario` VARCHAR(255) NOT NULL,
   `tipo_de_proveedor_id` INT NOT NULL,
   `localidad_id` INT NOT NULL,
   `sfguarduser_id` INT NOT NULL,
   `created_at` DATETIME NOT NULL,
   `updated_at` DATETIME NOT NULL,
   `fecha_emision` DATETIME NOT NULL,
   `version` INT NOT NULL,
   `lastuser_id` INT NOT NULL,
   `deleted_at` DATETIME NOT NULL,
   PRIMARY KEY (`id`)
) ENGINE = InnoDB CHARSET=utf8 COLLATE utf8_general_ci;


SELECT r.solicitante, r.cantidad, oc.descripcion, p.nombre as proveedor, s.nombre as solicitante, se.nombre as servicio, cc.precio_unitario, cc.cantidad, (cc.precio_unitario * cc.cantidad) as Total
FROM remito r
INNER JOIN orden_compra oc ON r.orden_compra_id = oc.id
INNER JOIN cuenta_corriente cc ON oc.id = cc.orden_compra_id
INNER JOIN proveedor p ON oc.proveedor_id = p.id
INNER JOIN solicitante s ON r.solicitante = s.codigo_ean
INNER JOIN servicio se ON cc.tipo_servicio_id = se.tipo_de_servicio_id
WHERE r.fecha = '2022-12-16';