const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

app.use(express.json())
app.use("/routes/api/users", "./api/users")
app.use("/routes/api/auth", "./api/auth")
app.use("/routes/api/profile", "./api/profile")
app.use("/routes/api/post", "./api/post")

app.use("/api/users", require('./api/users'))

// app.get("/", (req, res) => res.send("I am in the root"))

// app.post("/", (req, res) => {
//     const { name } = req.body
//     res.send(`The name is ${name}`)
//     console.log(name)
// })