const express = require('express')
<<<<<<< HEAD
const app = express()
const PORT = process.env.PORT || 4000

app.listen(PORT, () => console.log(`Running on a port ${PORT}`))
=======
const connectDB = require('./config/db')

const app = express ()
>>>>>>> f3a4f7783c4e408ed4d492193951be9144b76fd0

connectDB()

<<<<<<< HEAD
app.use("/api/users", require('./api/users'))
=======
//Initialize middleWare
app.use(express.json({ extended: false}))

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => res.send('API running'))

app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/post', require('./routes/api/post'))

app.listen(PORT, () => console.log(`server started on ${PORT}`))
>>>>>>> f3a4f7783c4e408ed4d492193951be9144b76fd0
