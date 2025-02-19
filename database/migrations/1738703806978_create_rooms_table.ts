import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'rooms'

  async up() {
    this.defer((client) => client.rawQuery('CREATE EXTENSION IF NOT EXISTS unaccent;'))

    this.schema.createTable(this.tableName, (table) => {
      table.string('id').primary()
      table.string('slug').notNullable().unique()
      table.string('name').notNullable()
      table.string('description').notNullable()
      table.string('lang').notNullable()
      table.integer('members_count').defaultTo('0')
      table.enum('visibility', ['public', 'paid', 'private']).notNullable().defaultTo('public')

      table.timestamp('created_at')
      table.timestamp('updated_at').nullable()
    })
  }

  async down() {
    this.defer((client) => client.rawQuery('DROP EXTENSION unaccent;'))

    this.schema.dropTable(this.tableName)
  }
}
