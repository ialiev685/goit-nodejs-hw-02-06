const { authentication } = require('./authentication')
const { controllerWrappers } = require('./controllerWrappers')
const {
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus
} = require('./validationContact')
const { validationUser, validationUpSubscription } = require('./validationUser')

module.exports = {
  authentication,
  controllerWrappers,
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus,
  validationUser,
  validationUpSubscription
}
