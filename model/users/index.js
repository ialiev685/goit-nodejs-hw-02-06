const registerUser = require('./registerUser')
const loginUser = require('./loginUser')
const logout = require('./logout')
const upSabscription = require('./upSabscription')
const uploadAvatar = require('./uploadAvatar')
const verifyUser = require('./verifyUser')
const sendVerifyTokenAgain = require('./sendVerifyTokenAgain')

module.exports = {
  registerUser,
  loginUser,
  logout,
  upSabscription,
  uploadAvatar,
  verifyUser,
  sendVerifyTokenAgain
}
