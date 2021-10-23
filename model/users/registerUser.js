const bcrypt = require('bcryptjs')
const User = require('../schemas/users.js')

const registerUser = async (body) => {
  const { email, password } = body

  const result = await User.findOne({ email })
  if (result) {
    return { status: 409 }
  }
  const salt = bcrypt.genSaltSync(10)
  const hashPassword = bcrypt.hashSync(password, salt)

  const data = await User.create({ email, password: hashPassword })

  return { status: 201, data }
}

module.exports = registerUser
