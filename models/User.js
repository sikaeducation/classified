const database = require("./database-connection")
const { Model } = require("objection")
Model.knex(database)

class User extends Model {
  static tableName = "user"
}

module.exports = User
