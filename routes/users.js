var express = require('express')
var router = express.Router()
var db = require('../db/api')
var bcrypt = require('bcrypt')

router.post('/signin', function(req, res, next){
  db.signIn()
  .then(function(agent){
    //Use bcrypt to log in
      if (isMatch) {
        res.send('Welome back, agent ' + agent.agentName)
      }
      else {
        res.render('index', { title: 'Classified', message: 'Incorrect login. Contents will self destruct' })
      }
  })
})

// router.post('/signin', function(req, res, next){
//   db.signIn(req.body.agentId, req.body.password)
//   .then(function(agent){
//     bcrypt.compare(req.body.password, agent.password, function(err, isMatch){
//       if (isMatch) {
//         res.send('Welome back, agent ' + agent.agentName)
//       }
//       else {
//         res.render('index', { title: 'Classified', message: 'Incorrect login. Contents will self destruct' })
//       }
//     })
//   })
// })

router.post('/signup', function(req,res,next){
  //Use bcrypt to Sign Up

    db.signUp()
    .then(function(agent){
      if (agent[0] === req.body.password) {
        res.render('index', { title: 'Classified', message: 'Password Must Be Hashed. Government Secrets are at Stake!' })
      }
      else {
        res.render('index', { title: 'Classified', message: 'Sign Up Successful' })
      }
    })
})

// router.post('/signedup', function(req,res,next){
//   bcrypt.hash(req.body.password, 10, function(err, hash){
//     db.signUp(req.body.agentName, hash)
//     .then(function(agent){
//       if (agent[0] === req.body.password) {
//         res.render('index', { title: 'Classified', message: 'Password Must Be Hashed. Government Secrets are at Stake!' })
//       }
//       else {
//         res.render('index', { title: 'Classified', message: 'Sign Up Successful' })
//       }
//     })
//   })
// })

module.exports = router;
