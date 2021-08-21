const { Router } = require("express")
const User = require("../models/User")
const router = Router()

router.get("/", async (request, response) => {
  const users = await User.query()

  response.json({ users })
})

router.get("/:userId", async (request, response) => {
  const user = await User.query().findById(request.params.userId)

  response.json({ user })
})

router.post("/", async (request, response) => {
  const user = await User.query().insert(request.body.user)

  response.status(201).json({ user })
})


router.patch("/:userId", async (request, response) => {
  await User.query().findById(request.params.userId).patch(request.body.user)

  response.sendStatus(204)
})

router.delete("/:userId", async (request, response) => {
  await User.query().deleteById(request.params.userId)

  response.sendStatus(204)
})

module.exports = router
