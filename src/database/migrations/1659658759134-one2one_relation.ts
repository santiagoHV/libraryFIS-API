import {MigrationInterface, QueryRunner} from "typeorm";

export class one2oneRelation1659658759134 implements MigrationInterface {
    name = 'one2oneRelation1659658759134'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "file" ("id" SERIAL NOT NULL, "documentLink" character varying NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_36b46d232307066b3a2c9ea3a1d" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "fileId" integer`);
        await queryRunner.query(`ALTER TABLE "publication" ADD CONSTRAINT "UQ_2fa04faef594bc06a89267670f7" UNIQUE ("fileId")`);
        await queryRunner.query(`ALTER TABLE "publication" ADD CONSTRAINT "FK_2fa04faef594bc06a89267670f7" FOREIGN KEY ("fileId") REFERENCES "file"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP CONSTRAINT "FK_2fa04faef594bc06a89267670f7"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP CONSTRAINT "UQ_2fa04faef594bc06a89267670f7"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "fileId"`);
        await queryRunner.query(`DROP TABLE "file"`);
    }

}
