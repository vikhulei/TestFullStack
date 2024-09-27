const express = require('express')
const router = express.Router()

router.get('/', (req, res) => res.send("I am in the users"))
router.post('/', (req, res) => {
    const { name, jobTitle } = req.body
    console.log(jobTitle)
    res.send("I am in the users")
}
)

module.exports = router