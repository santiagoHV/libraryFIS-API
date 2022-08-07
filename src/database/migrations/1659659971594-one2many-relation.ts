import {MigrationInterface, QueryRunner} from "typeorm";

export class one2manyRelation1659659971594 implements MigrationInterface {
    name = 'one2manyRelation1659659971594'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "author" ADD "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "author" ADD "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "authorId" integer`);
        await queryRunner.query(`ALTER TABLE "publication" ADD CONSTRAINT "FK_152fc564787a7fc0f5456ad7dff" FOREIGN KEY ("authorId") REFERENCES "author"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP CONSTRAINT "FK_152fc564787a7fc0f5456ad7dff"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "authorId"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "updatedAt"`);
        await queryRunner.query(`ALTER TABLE "author" DROP COLUMN "createdAt"`);
    }

}
