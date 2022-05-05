import {MigrationInterface, QueryRunner} from "typeorm";

export class newDb1651747069001 implements MigrationInterface {
    name = 'newDb1651747069001'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `parent_entity` (`id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `createdByUId` varchar(12) NULL, `modifiedByUId` varchar(12) NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `UserRoles` (`id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `createdByUId` varchar(12) NULL, `modifiedByUId` varchar(12) NULL, `roleName` varchar(60) NOT NULL, `activeStatus` tinyint UNSIGNED NOT NULL DEFAULT '1', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Users` (`id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `createdByUId` varchar(12) NULL, `modifiedByUId` varchar(12) NULL, `firstName` varchar(60) NOT NULL, `lastName` varchar(60) NOT NULL, `roleId` bigint UNSIGNED NOT NULL, `email` varchar(45) NOT NULL, `phone` varchar(15) NOT NULL, `password` varchar(500) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Orders` (`id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `createdByUId` varchar(12) NULL, `modifiedByUId` varchar(12) NULL, `totalPrice` bigint NOT NULL, `orderType` enum ('cash', 'upi') NOT NULL DEFAULT 'cash', `orderStatus` enum ('PLACED', 'PAYED', 'ON_TRANSPORT', 'DELIVERED', 'CANCELLED') NOT NULL DEFAULT 'PLACED', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `Dishes` (`id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), `updatedAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6) ON UPDATE CURRENT_TIMESTAMP(6), `deletedAt` datetime(6) NULL, `createdByUId` varchar(12) NULL, `modifiedByUId` varchar(12) NULL, `title` varchar(40) NOT NULL, `description` varchar(500) NOT NULL, `category` enum NOT NULL, `price` int NOT NULL, `available` tinyint NOT NULL, `quantity` int NOT NULL DEFAULT '1', PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `Users` ADD CONSTRAINT `FK_65c56db5a9988b90b0d7245e0f0` FOREIGN KEY (`roleId`) REFERENCES `UserRoles`(`id`) ON DELETE RESTRICT ON UPDATE RESTRICT");
        await queryRunner.query("ALTER TABLE `Orders` ADD CONSTRAINT `FK_ce8e3c4d56e47ff9c8189c26213` FOREIGN KEY (`id`) REFERENCES `Users`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `Dishes` ADD CONSTRAINT `FK_5073d41d0bd38689078f492ae69` FOREIGN KEY (`id`) REFERENCES `Orders`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `Dishes` DROP FOREIGN KEY `FK_5073d41d0bd38689078f492ae69`");
        await queryRunner.query("ALTER TABLE `Orders` DROP FOREIGN KEY `FK_ce8e3c4d56e47ff9c8189c26213`");
        await queryRunner.query("ALTER TABLE `Users` DROP FOREIGN KEY `FK_65c56db5a9988b90b0d7245e0f0`");
        await queryRunner.query("DROP TABLE `Dishes`");
        await queryRunner.query("DROP TABLE `Orders`");
        await queryRunner.query("DROP TABLE `Users`");
        await queryRunner.query("DROP TABLE `UserRoles`");
        await queryRunner.query("DROP TABLE `parent_entity`");
    }

}
