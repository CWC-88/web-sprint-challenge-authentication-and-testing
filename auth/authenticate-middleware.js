/* 
  complete the middleware code to check if the user is logged in
  before granting access to the next middleware/route handler
*/

// module.exports = (req, res, next) => {
//   res.status(401).json({ you: 'shall not pass!' });
// };

const jwt = require('jsonwebtoken')

function authenticate() {
  return async (req, res, next) => {
    try {
      const token = req.headers.cookie
      if (!token) {
        return res.status(401).json({
          message: 'invalid auth credentials'
        })
      } else {
        next()
      }
           
    } catch(err) {
      console.log('Error: ', err)
    }
  }
}

module.exports = authenticate