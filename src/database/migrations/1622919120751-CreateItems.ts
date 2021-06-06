import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateItems1622919120751 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "items",
                columns: [
                    {
                        name: 'id',
                        type: 'varchar',
                        isPrimary: true
                    },
                    {
                        name: 'name',
                        type: 'varchar'
                    },
                    {
                        name: 'price',
                        type: 'varchar'
                    },
                    {
                        name: 'storage',
                        type: 'int'
                    },
                    {
                        name: 'minimum',
                        type: 'int'
                    }
                ]
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('items');
    }

}
