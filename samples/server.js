const express = require('express')
const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Running on a port ${PORT}`))

app.use(express.json())

app.use("/api/users", require('./api/users'))