exports.seed = async (knex) => {
  await knex("user").del()
  await knex("user").insert({
    username: "admin",
    password: "s3cr3t!",
    role: "superuser",
  })
}
