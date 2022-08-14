import {MigrationInterface, QueryRunner} from "typeorm";

export class nameForFiles1660418551922 implements MigrationInterface {
    name = 'nameForFiles1660418551922'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" ADD "documentName" character varying NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "file" DROP COLUMN "documentName"`);
    }

}
