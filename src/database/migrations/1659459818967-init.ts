import {MigrationInterface, QueryRunner} from "typeorm";

export class init1659459818967 implements MigrationInterface {
    name = 'init1659459818967'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "publication" ("id" SERIAL NOT NULL, "name" character varying(100) NOT NULL, "archived" boolean NOT NULL DEFAULT false, CONSTRAINT "PK_8aea8363d5213896a78d8365fab" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "publication"`);
    }

}
