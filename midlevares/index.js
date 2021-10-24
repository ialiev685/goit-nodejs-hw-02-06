const { authentication } = require('./authentication')
const { controllerWrappers } = require('./controllerWrappers')
const validation = require('./validationContact')
const { validationUser } = require('./validationUser')

module.exports = {
  authentication,
  controllerWrappers,
  validation,
  validationUser
}
