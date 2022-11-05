-- CreateTable
CREATE TABLE `answers` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `question_id` INTEGER UNSIGNED NOT NULL,
    `definition` TEXT NOT NULL,
    `order` TINYINT NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `answers_question_id_foreign`(`question_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `attachments` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `message_id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `url` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `attachments_message_id_foreign`(`message_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `categories` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `conversations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `from_id` INTEGER UNSIGNED NOT NULL,
    `to_id` INTEGER UNSIGNED NOT NULL,
    `unread_from` TINYINT NOT NULL DEFAULT 0,
    `unread_to` TINYINT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `conversations_from_id_foreign`(`from_id`),
    INDEX `conversations_to_id_foreign`(`to_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `events` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `casting_id` INTEGER UNSIGNED NOT NULL,
    `actor_id` INTEGER UNSIGNED NOT NULL,
    `role_id` INTEGER UNSIGNED,
    `unread_casting` TINYINT NOT NULL DEFAULT 0,
    `unread_actor` TINYINT NOT NULL DEFAULT 0,
    `start_at` TIMESTAMP(0),
    `end_at` TIMESTAMP(0),
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `events_actor_id_foreign`(`actor_id`),
    INDEX `events_casting_id_foreign`(`casting_id`),
    INDEX `events_role_id_foreign`(`role_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `headshots` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `image` VARCHAR(255) NOT NULL,
    `is_profile_picture` BOOLEAN NOT NULL DEFAULT false,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `messages` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `conversation_id` INTEGER UNSIGNED NOT NULL,
    `from_id` INTEGER UNSIGNED NOT NULL,
    `to_id` INTEGER UNSIGNED NOT NULL,
    `body` TEXT NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `messages_conversation_id_foreign`(`conversation_id`),
    INDEX `messages_from_id_foreign`(`from_id`),
    INDEX `messages_to_id_foreign`(`to_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `password_resets` (
    `email` VARCHAR(255) NOT NULL,
    `token` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),

    INDEX `password_resets_email_index`(`email`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `potential_users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `email` VARCHAR(255) NOT NULL,
    `role` ENUM('actor', 'filmmaker'),
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    UNIQUE INDEX `potential_users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `projects` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `category_id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `location` VARCHAR(255) NOT NULL DEFAULT '',
    `company_name` VARCHAR(255) NOT NULL DEFAULT '',
    `worker_type` TINYINT UNSIGNED NOT NULL,
    `status` TINYINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `projects_category_id_foreign`(`category_id`),
    INDEX `projects_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_role` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER UNSIGNED NOT NULL,
    `question_id` INTEGER UNSIGNED NOT NULL,
    `importance` TINYINT UNSIGNED,
    `answer` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `question_role_question_id_foreign`(`question_id`),
    INDEX `question_role_role_id_foreign`(`role_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_sections` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `casting_title` VARCHAR(255) NOT NULL,
    `actor_title` VARCHAR(255) NOT NULL,
    `casting_subtitle` VARCHAR(255) NOT NULL,
    `actor_subtitle` VARCHAR(255) NOT NULL,
    `casting_hint` VARCHAR(255) NOT NULL,
    `actor_hint` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `question_user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `question_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `answer` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `question_user_question_id_foreign`(`question_id`),
    INDEX `question_user_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `questions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `section_id` INTEGER UNSIGNED NOT NULL,
    `definition` TEXT NOT NULL,
    `type` TINYINT UNSIGNED NOT NULL,
    `differential_points` TINYINT UNSIGNED NOT NULL,
    `required` TINYINT UNSIGNED NOT NULL,
    `importance_required` TINYINT UNSIGNED NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `questions_section_id_foreign`(`section_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `rates` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `casting_id` INTEGER UNSIGNED NOT NULL,
    `actor_id` INTEGER UNSIGNED NOT NULL,
    `rating` TINYINT NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `rates_actor_id_foreign`(`actor_id`),
    INDEX `rates_casting_id_foreign`(`casting_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reels` (
    `id` BIGINT UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `link` VARCHAR(255) NOT NULL,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `role_user` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `role_id` INTEGER UNSIGNED NOT NULL,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `seen` TINYINT NOT NULL DEFAULT 0,
    `starred` TINYINT NOT NULL DEFAULT 0,
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    INDEX `role_user_role_id_foreign`(`role_id`),
    INDEX `role_user_user_id_foreign`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `roles` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `project_id` INTEGER UNSIGNED NOT NULL,
    `winner_id` INTEGER UNSIGNED,
    `name` VARCHAR(255) NOT NULL,
    `description` TEXT NOT NULL,
    `created_at` TIMESTAMP(0) NOT NULL,
    `updated_at` TIMESTAMP(0),

    INDEX `roles_project_id_foreign`(`project_id`),
    INDEX `roles_winner_id_foreign`(`winner_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `resume` VARCHAR(255) NOT NULL DEFAULT '',
    `imdb_profile` VARCHAR(255) NOT NULL DEFAULT '',
    `union_status` VARCHAR(255) NOT NULL DEFAULT '',
    `role` TINYINT NOT NULL,
    `emails_inbox` TINYINT NOT NULL DEFAULT 1,
    `emails_schedule` TINYINT NOT NULL DEFAULT 1,
    `email_verified_at` TIMESTAMP(0),
    `password` VARCHAR(255) NOT NULL,
    `location` VARCHAR(255) NOT NULL DEFAULT '',
    `verified` TINYINT NOT NULL DEFAULT 0,
    `verification_code` VARCHAR(255),
    `remember_token` VARCHAR(100),
    `stripe_id` VARCHAR(255),
    `card_brand` VARCHAR(255),
    `card_last_four` VARCHAR(255),
    `trial_ends_at` TIMESTAMP(0),
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),
    `referred_by` VARCHAR(255),

    UNIQUE INDEX `users_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `migrations` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `migration` VARCHAR(255) NOT NULL,
    `batch` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `subscriptions` (
    `id` INTEGER UNSIGNED NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER UNSIGNED NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `stripe_id` VARCHAR(255) NOT NULL,
    `stripe_plan` VARCHAR(255) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `trial_ends_at` TIMESTAMP(0),
    `ends_at` TIMESTAMP(0),
    `created_at` TIMESTAMP(0),
    `updated_at` TIMESTAMP(0),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `answers` ADD CONSTRAINT `answers_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `attachments` ADD CONSTRAINT `attachments_message_id_fkey` FOREIGN KEY (`message_id`) REFERENCES `messages`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conversations` ADD CONSTRAINT `conversations_from_id_fkey` FOREIGN KEY (`from_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `conversations` ADD CONSTRAINT `conversations_to_id_fkey` FOREIGN KEY (`to_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_casting_id_fkey` FOREIGN KEY (`casting_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `events` ADD CONSTRAINT `events_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `headshots` ADD CONSTRAINT `headshots_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_conversation_id_fkey` FOREIGN KEY (`conversation_id`) REFERENCES `conversations`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_from_id_fkey` FOREIGN KEY (`from_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `messages` ADD CONSTRAINT `messages_to_id_fkey` FOREIGN KEY (`to_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_category_id_fkey` FOREIGN KEY (`category_id`) REFERENCES `categories`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `projects` ADD CONSTRAINT `projects_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question_role` ADD CONSTRAINT `question_role_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question_role` ADD CONSTRAINT `question_role_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question_user` ADD CONSTRAINT `question_user_question_id_fkey` FOREIGN KEY (`question_id`) REFERENCES `questions`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `question_user` ADD CONSTRAINT `question_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `questions` ADD CONSTRAINT `questions_section_id_fkey` FOREIGN KEY (`section_id`) REFERENCES `question_sections`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rates` ADD CONSTRAINT `rates_actor_id_fkey` FOREIGN KEY (`actor_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `rates` ADD CONSTRAINT `rates_casting_id_fkey` FOREIGN KEY (`casting_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reels` ADD CONSTRAINT `reels_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_user` ADD CONSTRAINT `role_user_role_id_fkey` FOREIGN KEY (`role_id`) REFERENCES `roles`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `role_user` ADD CONSTRAINT `role_user_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roles` ADD CONSTRAINT `roles_project_id_fkey` FOREIGN KEY (`project_id`) REFERENCES `projects`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `roles` ADD CONSTRAINT `roles_winner_id_fkey` FOREIGN KEY (`winner_id`) REFERENCES `users`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
