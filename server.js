const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000

app.use(express.json())
app.use("/routes/api/users", "./api/users")
app.use("/routes/api/auth", "./api/auth")
app.use("/routes/api/profile", "./api/profile")
app.use("/routes/api/post", "./api/post")

app.listen(PORT, () => console.log(`Server on the port ${PORT}`))
