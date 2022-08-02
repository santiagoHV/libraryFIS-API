import {MigrationInterface, QueryRunner} from "typeorm";

export class init21659475794848 implements MigrationInterface {
    name = 'init21659475794848'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "author" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "email" boolean, "phone" boolean, "alive" boolean NOT NULL DEFAULT true, "address" character varying, CONSTRAINT "PK_5a0e79799d372fe56f2f3fa6871" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "description" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "type" character varying NOT NULL`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "idISBN" character varying`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "idSSN" character varying`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "idSSN"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "idISBN"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "type"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "description"`);
        await queryRunner.query(`DROP TABLE "author"`);
    }

}
