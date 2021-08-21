const { Router } = require("express")
const User = require("../models/User")
const router = Router()

router.get("/users", async (request, response) => {
  const users = await User.query()

  response.json({ users })
})

router.get("/users/:userId", async () => {
  const user = await User.query().findById(request.params.userId)

  response.json({ user })
})

router.post("/users", async (request, response) => {
  const user = await User.query().insert(request.body.user)

  response.status(201).json({ user })
})


router.patch("/users/:userId", async () => {
  const user = await User.query().findById(request.params.userId).patch(request.body.user)

  response.json({ user })
})

router.delete("/users/:userId", async () => {
  const user = await User.query().deleteById(request.params.userId)

  response.json({ user })
})

module.exports = router
