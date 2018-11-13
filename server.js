const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000
const cors = require('cors')
if (process.env.NODE_ENV !== 'test') app.use(morgan('dev'))
app.use(bodyParser.json())
app.use(cors())

const usersRoutes = require('./routes/users.routes')

app.use('/users' , usersRoutes)

app.listen(port, console.log(`HHHEEEYYYAAAAA its Andre ${port}!!`))