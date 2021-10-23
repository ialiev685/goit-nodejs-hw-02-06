const User = require('../schemas/users.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const loginUser = async(body) => {
  const { email, password } = body

  const result = await User.findOne({ email }, '_id, password')

  if (!result) {
    return { status: 401 }
  }

  const hashPassword = result.password
  const checkPassword = bcrypt.compareSync(password, hashPassword)

  if (!checkPassword) {
    return { status: 401 }
  }

  const { SECRET_KEY } = process.env
  const payload = {
    id: result._id
  }
  const token = jwt.sign(payload, SECRET_KEY)

  const data = await User.findByIdAndUpdate(payload.id, { token })

  return { status: 200, data }
}

module.exports = loginUser
