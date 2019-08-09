import { MigrationInterface, QueryRunner, Table, TableIndex } from "typeorm";

export class CreateUserTable1565325291603 implements MigrationInterface {

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
          name: 'password',
          type: 'varchar',
        },
        {
          name: 'password_reset_token',
          type: 'varchar',
        },
        {
          name: 'password_reset_expires',
          type: 'varchar',
        },
        {
          name: 'fullname',
          type: 'varchar',
        },
        {
          name: 'gender',
          type: 'varchar',
        },
        {
          name: 'created_at',
          type: 'timestamp'
        },
        {
          name: 'updated_at',
          type: 'timestamp'
        },
        {
          name: 'deleted_at',
          type: 'timestamp',
          isNullable: true,
          default: null,
        }
      ]
    }), true);

    await queryRunner.createIndex('user', new TableIndex({
      name: 'idx_user_name',
      columnNames: ['username']
    }));

    await queryRunner.createIndex('user', new TableIndex({
      name: 'idx_email',
      columnNames: ['email']
    }));

    await queryRunner.createIndex('user', new TableIndex({
      name: 'idx_full_name',
      columnNames: ['fullname']
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropIndex('user', 'idx_user_name');
    await queryRunner.dropIndex('user', 'idx_email');
    await queryRunner.dropIndex('user', 'idx_full_name');

    await queryRunner.dropTable('user');
  }

}
