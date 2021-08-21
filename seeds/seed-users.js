exports.seed = async knex => {
  await knex("user").del()
  await knex("user").insert({
    username: "admin",
    role: "superuser",
  })
}
