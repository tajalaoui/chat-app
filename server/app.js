const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')

// Db
require('./db/mongoose.js')

// * Activating packages
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
)
app.use(bodyParser.json())
app.use(cors())

// * Routers.
const AUTH = require('./routers/auth.js')
const PROFILE = require('./routers/profile.js')
const FETCH_USERS = require('./routers/users.js')
const MESSAGES = require('./routers/messages.js')
const SETTINGS = require('./routers/settings.js')

// * Activating routes
app.use(AUTH)
app.use(PROFILE)
app.use(FETCH_USERS)
app.use(MESSAGES)
app.use(SETTINGS)

const port = 3000

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = app
