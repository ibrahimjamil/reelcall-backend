-- AlterTable
ALTER TABLE `projects` ADD COLUMN `start_date` TIMESTAMP(0) NULL,
    MODIFY `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0);
