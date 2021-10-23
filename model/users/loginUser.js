const User = require('../schemas/users.js')
const bcrypt = require('bcryptjs')

const loginUser = async(body) => {
  const { email, password } = body

  const result = await User.findOne({ email }, '_id, password')

  if (result) {
    const hashPassword = result.password
    const checkPassword = bcrypt.compareSync(password, hashPassword)

    console.log(checkPassword)
    
    return { status: 200 }
  }
  return { status: 401 }
}

module.exports = loginUser
