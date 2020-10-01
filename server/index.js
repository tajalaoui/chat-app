const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
const cookieParser = require('cookie-parser')

app.use(bodyParser.json())
app.use(cors())
app.use(cookieParser())

// * Routers.
const AUTH_ROUTER = require('./routers/auth.js')
app.use(AUTH_ROUTER)

const PROFILE_ROUTER = require('./routers/profile.js')
app.use(PROFILE_ROUTER)

require('./db/mongoose.js')

module.exports = app
