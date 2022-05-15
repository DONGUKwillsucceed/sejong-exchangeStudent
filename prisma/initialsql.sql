-- CreateTable
CREATE TABLE `boardtypes` (
    `id` VARCHAR(64) NOT NULL,
    `country` VARCHAR(64) NULL,    -- china
    `type` VARCHAR(64) NOT NULL,   -- community

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `comments` (
    `id` VARCHAR(64) NOT NULL,
    `postings_id` VARCHAR(64) NOT NULL,
    `author` VARCHAR(64) NOT NULL,
    `context` VARCHAR(45) NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `postings` (
    `id` VARCHAR(64) NOT NULL,
    `school_id` VARCHAR(64) NULL,
    `boardtypes_id` VARCHAR(64) NOT NULL,
    `title` VARCHAR(64) NOT NULL,
    `author` VARCHAR(64) NOT NULL,
    `context` TEXT NOT NULL,
    `createdAt` DATETIME(0) NOT NULL,
    `updatedAt` DATETIME(0) NOT NULL,

    FULLTEXT INDEX `Postings_author_idx`(`author`),
    FULLTEXT INDEX `Postings_title_idx`(`title`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `school` (
    `id` VARCHAR(64) NOT NULL,
    `boardtypes_id` VARCHAR(64) NOT NULL,
    `schoolName` VARCHAR(64) NOT NULL,

    FULLTEXT INDEX `School_schoolName_idx`(`schoolName`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `users` (
    `id` VARCHAR(64) NOT NULL,
    `userID` VARCHAR(64) NOT NULL,
    `password` VARCHAR(64) NOT NULL,
    `userName` VARCHAR(64) NOT NULL,
    `nickName` VARCHAR(64) NOT NULL,
    `isAuth` BOOLEAN NOT NULL DEFAULT false,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
