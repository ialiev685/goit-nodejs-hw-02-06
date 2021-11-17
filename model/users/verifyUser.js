const { User } = require('../schemas/users.js')
const { NotFound } = require('http-errors')

const verifyUser = async (verifyToken) => {
  try {
    const user = await User.findOne({ verifyToken })

    if (!user) {
      throw new NotFound('User not found')
    }

    const result = await User.findByIdAndUpdate(user._id, { verifyToken: null, verify: true }, { new: true }).select('verify')

    return result
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = verifyUser
