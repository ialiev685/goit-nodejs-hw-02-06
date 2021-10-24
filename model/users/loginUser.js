const User = require('../schemas/users.js')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const { Unauthorized } = require('http-errors')

const loginUser = async(body) => {
  try {
    const { email, password } = body

    const result = await User.findOne({ email }, '_id, password')

    if (!result) {
      throw new Unauthorized('Email or password is wrong')
      // return { status: 401 }
    }

    const hashPassword = result.password
    const checkPassword = bcrypt.compareSync(password, hashPassword)

    if (!checkPassword) {
      throw new Unauthorized('Email or password is wrong')
      // return { status: 401 }
    }

    const { SECRET_KEY } = process.env
    const payload = {
      id: result._id
    }
    const token = jwt.sign(payload, SECRET_KEY)

    const data = await User.findByIdAndUpdate(payload.id, { token })
    data.token = token

    return { status: 200, data }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = loginUser
