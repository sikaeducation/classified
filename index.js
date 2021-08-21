const express = require("express")
const app = require("express")

const userRoutes = require("./routes/user")
const authRoutes = require("./routes/authentication")

app.use(express.json())

app.use(authRoutes)
app.use(userRoutes)

app.use((error, request, response, next) => {
  console.error(error.message)
  response.status(500).json({
    error: "There was a problem with the server",
  })
})

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Listening on port ${port}`))
