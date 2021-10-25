const registerController = require('./registerController')
const loginController = require('./loginController')
const logoutController = require('./logoutController')
const currentUser = require('./currentUser')
const upSabscriptionController = require('./upSabscriptionController')

module.exports = {
  registerController,
  loginController,
  logoutController,
  currentUser,
  upSabscriptionController
}
