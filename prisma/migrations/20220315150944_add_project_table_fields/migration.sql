-- AlterTable
ALTER TABLE `projects` ADD COLUMN `casting_director` VARCHAR(50) NULL,
    ADD COLUMN `director` VARCHAR(50) NULL,
    ADD COLUMN `producer` VARCHAR(50) NULL,
    ADD COLUMN `writer` VARCHAR(50) NULL;
