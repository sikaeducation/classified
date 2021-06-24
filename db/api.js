var knex = require('./knex')

module.exports = {
  signIn: function() {
  },
  signUp: function() {
  }
}

// module.exports = {
//   signIn: function(agentName, password) {
//     return knex('my_user').select().where({agentName: agentName}).first()
//   },
//
//   signUp: function(agentName, password) {
//     return knex('my_user').insert({agentName: agentName, password: password}, "password")
//   }
// }
