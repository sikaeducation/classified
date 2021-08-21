const { Router } = require("express")
const router = Router()

router.post("/login", async (request, response) => {
  response.json({
    message: "You're logged in!",
  })
})

module.exports = router
