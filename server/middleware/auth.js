const jwt = require('jsonwebtoken')

function auth(req, res, next) {
  try {
    const token = req.headers.authorization
    // const token = authHeader.split(' ')[1]

    const decoded = jwt.verify(token, 'jwt_secret')

    // TODO Re add bearer ?

    if (!decoded) {
      return res.sendStatus(403)
    }

    req.token = token
    next()
  } catch (error) {
    res.status(403).send({ error: 'Please Authenticate' })
  }
}

// function auth(req, res, next) {
//   // Get auth header value
//   const authHeader = req.headers['authorization']

//   console.log('Auth Header', req.headers)

//   // Check if bearer is undefined
//   if (typeof authHeader !== 'undefined') {
//     // Split at the space
//     const token = authHeader.split(' ')[1]

//     // Set the token
//     req.token = token
//     // Next middleware
//     next()
//   } else {
//     // Forbidden
//     res.sendStatus(403)
//   }
// }

module.exports = auth
