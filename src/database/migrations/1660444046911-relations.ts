import {MigrationInterface, QueryRunner} from "typeorm";

export class relations1660444046911 implements MigrationInterface {
    name = 'relations1660444046911'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" ADD "inPhysical" boolean NOT NULL DEFAULT false`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "stock" integer DEFAULT '0'`);
        await queryRunner.query(`ALTER TABLE "publication" ADD "creatorId" integer`);
        await queryRunner.query(`ALTER TABLE "publication" ADD CONSTRAINT "FK_2134fce96b5654e0583739926e9" FOREIGN KEY ("creatorId") REFERENCES "user"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "publication" DROP CONSTRAINT "FK_2134fce96b5654e0583739926e9"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "creatorId"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "stock"`);
        await queryRunner.query(`ALTER TABLE "publication" DROP COLUMN "inPhysical"`);
    }

}
