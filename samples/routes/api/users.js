const express = require('express')
const router = express.Router()
const gravatar = require('gravatar')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const config = require('config')
const { check, validationResult } = require('express-validator')

const User = require('../../models/User')

router.get('/', (req, res) => res.send('Users route'))

router.post('/', [
    check('name', 'Name is required')
        .not()
        .isEmpty(),
    check('email', 'Please include a valid email')
        .isEmail(),
    check('password', 'Please enter a password with 6 or more charachters')
        .isLength({ min: 6 })

], async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() })
    }

    const { name, email, password } = req.body

    //See if user exists
    let user = await User.findOne({ email })


    if (user) {
       return res.status(400).json({ errors: [{ msg: "User already exists" }] })
    }



    try {
        //Get users gravatar

        const avatar = gravatar.url(email, {
            s: '200',  //size
            r: 'pg',   //rating
            d: 'mm'    //default image
        })

        user = new User({
            name,
            email,
            avatar,
            password
        })

        //Encrypt password
        const salt = await bcrypt.genSalt(10)

        user.password = await bcrypt.hash(password, salt)

        await user.save()

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
            if(err) throw err
            res.json( { token })
        })


        // res.send('User registered')



    } catch (err) {
        console.log(err.message)
        res.status(500).send('Server error')
    }
}
)


module.exports = router