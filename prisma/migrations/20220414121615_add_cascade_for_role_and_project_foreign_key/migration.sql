-- DropForeignKey
ALTER TABLE `events` DROP FOREIGN KEY `events_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `question_role` DROP FOREIGN KEY `question_role_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `role_invitations` DROP FOREIGN KEY `role_invitations_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `role_user` DROP FOREIGN KEY `role_user_role_id_fkey`;

-- DropForeignKey
ALTER TABLE `roles` DROP FOREIGN KEY `roles_project_id_fkey`;

-- AlterTable
ALTER TABLE `answers` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `attachments` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `categories` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `conversations` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `events` MODIFY `start_at` TIMESTAMP(0) NULL,
    MODIFY `end_at` TIMESTAMP(0) NULL,
    MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `headshots` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `messages` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `potential_users` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `projects` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `question_role` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `question_sections` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `question_user` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `questions` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `rates` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `reels` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `role_invitations` ALTER COLUMN `updated_at` DROP DEFAULT;

-- AlterTable
ALTER TABLE `role_user` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `roles` MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `subscriptions` MODIFY `trial_ends_at` TIMESTAMP(0) NULL,
    MODIFY `ends_at` TIMESTAMP(0) NULL,
    MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AlterTable
ALTER TABLE `users` MODIFY `email_verified_at` TIMESTAMP(0) NULL,
    MODIFY `trial_ends_at` TIMESTAMP(0) NULL,
    MODIFY `updated_at` TIMESTAMP(0) NULL;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question_role` ADD CONSTRAINT `question_role_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_user` ADD CONSTRAINT `role_user_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roles` ADD CONSTRAINT `roles_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_invitations` ADD CONSTRAINT `role_invitations_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
