/*
  Warnings:

  - A unique constraint covering the columns `[role_id,user_id]` on the table `role_user` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX `role_user_unique_constraint` ON `role_user`(`role_id`, `user_id`);
