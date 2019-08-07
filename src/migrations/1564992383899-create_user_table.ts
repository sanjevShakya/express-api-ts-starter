import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class createUserTable1564992383899 implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.createTable(new Table({
      name: 'user',
      columns: [
        {
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          isUnique: true,
          isNullable: false,
        },
        {
          name: 'username',
          type: 'varchar',
        },
        {
          name: 'email',
          type: 'varchar',
          isUnique: true,
        },
        {
          name: 'createdAt',
          type: 'timestamp'
        },
        {
          name: 'updatedAt',
          type: 'timestamp'
        }
      ]
    }), true);

    await queryRunner.createIndex('user', new TableIndex({
      name: "IDX_USER_NAME",
      columnNames: ["username"]
    }));

    await queryRunner.createIndex('user', new TableIndex({
      name: "IDX_EMAIL",
      columnNames: ["email"]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropTable('user')
  }
}
