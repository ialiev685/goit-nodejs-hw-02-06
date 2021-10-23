const { authentication } = require('./authentication')
const controllerWrappers = require('./controllerWrappers')
const validation = require('./validation')
const { validationRegisterUser } = require('./validationUser')

module.exports = {
  authentication,
  controllerWrappers,
  validation,
  validationRegisterUser
}
