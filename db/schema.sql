CREATE SCHEMA `burgers_db` ;

USE `burgers_db`;

CREATE TABLE IF NOT EXISTS `burgers` (
    `id` INT NOT NULL AUTO_INCREMENT,
    `burger_name` VARCHAR(200) NOT NULL,
    `devoured` BOOLEAN NOT NULL DEFAULT 0,
    `date` DATETIME  NOT NULL,
    PRIMARY KEY (`id`)
);