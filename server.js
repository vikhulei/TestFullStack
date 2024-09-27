const express = require('express')
const app = express()
const PORT = process.env.PORT || 4500

app.listen(PORT, () => console.log(`Listening on the port ${PORT}`))

app.use(express.json())

app.use("/api/users", require("./api/users"))