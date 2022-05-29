/*
  Warnings:

  - Added the required column `user_id` to the `postings` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `postings` ADD COLUMN `user_id` VARCHAR(64) NOT NULL;

-- AddForeignKey
ALTER TABLE `postings` ADD CONSTRAINT `postings_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `users`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
