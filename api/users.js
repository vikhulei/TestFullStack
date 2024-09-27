const express = require('express')
const router = express.Router()

router.get("/", (req, res) => res.send("Hello I am here in the users"))

module.exports = router