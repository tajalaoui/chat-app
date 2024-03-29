const jwt = require('jsonwebtoken')

// const auth = (req, res, next) => {
//   const authHeader = req.headers.authorization

//   if (authHeader) {
//     // To remove bearer and get only the jwt
//     const token = authHeader.split(' ')[1]

//     jwt.verify(token, 'jwt_secret', (err, user) => {
//       if (err) {
//         return res.sendStatus(403)
//       }

//       req.user = user
//       console.log(req.user)
//       next()
//     })
//   } else {
//     res.sendStatus(401)
//   }
// }

// const auth = (req, res, next) => {
//   try {
//     const authHeader = req.headers.authorization
//     const token = authHeader.split(' ')[1]

//     const decoded = jwt.verify(token, 'jwt_secret')

//     if (!decoded) {
//       return res.sendStatus(403)
//     }
//     // ?
//     req.user = user
//     next()
//   } catch (error) {
//     // res.status(401).send({ error: 'Please Authenticate' })
//   }
// }

function auth(req, res, next) {
  // Get auth header value
  const bearerHeader = req.headers['authorization']

  console.log('Auth Header', req.headers)

  // Check if bearer is undefined
  if (typeof bearerHeader !== 'undefined') {
    // Split at the space
    const bearer = bearerHeader.split(' ')
    // Get token from array
    const bearerToken = bearer[1]
    // Set the token
    req.token = bearerToken
    // Next middleware
    next()
  } else {
    console.log('here');

    // Forbidden
    res.sendStatus(403)
  }
}

module.exports = auth
