const jwt = require('jsonwebtoken')
const User = require('../model/schemas/users')

const authentication = async(req, res, next) => {
  const [bearer, token] = req.headers.authorization.split(' ')

  if (bearer !== 'Bearer') {
    res.status(401).json({ message: 'Not authorized' })
    return
  }

  const { SECRET_KEY } = process.env
  const { id } = jwt.verify(token, SECRET_KEY)

  const result = await User.findById(id)

  if (!result) {
    res.status(401).json({ message: 'Not authorized' })
    return
  }

  if (result.token !== token) {
    res.status(401).json({ message: 'Not authorized' })
    return
  }

  req.user = result
  next()
}

module.exports = { authentication }
