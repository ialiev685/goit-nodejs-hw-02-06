const { authentication } = require('./authentication')
const { controllerWrappers } = require('./controllerWrappers')
const {
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus
} = require('./validationContact')
const { validationUser } = require('./validationUser')

module.exports = {
  authentication,
  controllerWrappers,
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus,
  validationUser
}
