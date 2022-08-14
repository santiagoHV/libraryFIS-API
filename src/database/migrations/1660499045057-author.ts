import {MigrationInterface, QueryRunner} from "typeorm";

export class author1660499045057 implements MigrationInterface {
    name = 'author1660499045057'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "email" character varying`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "phone" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "phone"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "phone" boolean`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "email"`);
        await queryRunner.query(`ALTER TABLE "author" ADD "email" boolean`);
    }

}
