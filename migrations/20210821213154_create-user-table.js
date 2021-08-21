exports.up = async (knex) = >{
  await knex.schema.createTable("user", table => {
    table.increments()
    table.string("username")
    table.string("password")
    table.string("role")
  })
}

exports.down = async (knex) = >{
  await knex.schema.dropTableIfExists("user")
}
