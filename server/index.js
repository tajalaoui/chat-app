const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const userRouter = require('./routers/user.js')

app.use(cors())
app.use(bodyParser.json())
app.use(userRouter)

require('./db/mongoose.js')

module.exports = app
