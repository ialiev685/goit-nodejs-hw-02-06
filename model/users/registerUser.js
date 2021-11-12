const bcrypt = require('bcryptjs')
const { User } = require('../schemas/users.js')
const { Conflict } = require('http-errors')
const gravatar = require('gravatar')

const registerUser = async (body) => {
  try {
    const { email, password } = body

    const result = await User.findOne({ email })
    if (result) {
      throw new Conflict('Email in use')
    }

    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    const avatarURL = gravatar.url(email, { s: '200', d: 'retro' }, false)

    const data = await User.create({ email, password: hashPassword, avatarURL })

    return { status: 201, data }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = registerUser
