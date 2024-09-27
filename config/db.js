const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect(db)
    } catch(err) {
        console.error(err.message)
        process.exit(1)
    }
}

module.exports = connectDB