import {MigrationInterface, QueryRunner} from "typeorm";

export class addDateFields1659476120651 implements MigrationInterface {
    name = 'addDateFields1659476120651'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "createdAt"`);
    }

}
