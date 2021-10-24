const User = require('../schemas/users.js')

const logout = async(id) => {
  try {
    const result = await User.findByIdAndUpdate(id, { token: null })

    if (result) {
      return { status: 204 }
    }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = logout
