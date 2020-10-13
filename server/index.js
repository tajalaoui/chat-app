const app = require('express')()
const bodyParser = require('body-parser')
const cors = require('cors')
require('./db/mongoose.js')
app.use(bodyParser.json())
app.use(cors())

// * Routers.
const AUTH = require('./routers/auth.js')
const PROFILE = require('./routers/profile.js')
const FETCH_USERS = require('./routers/users.js')
app.use(AUTH)
app.use(PROFILE)
app.use(FETCH_USERS)

const port = 3000

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`)
})

module.exports = app
