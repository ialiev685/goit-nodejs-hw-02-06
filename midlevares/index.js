const { authentication } = require('./authentication')
const { controllerWrappers } = require('./controllerWrappers')
const {
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus
} = require('./validationContact')
const { validationUser, validationUpSubscription } = require('./validationUser')
const { upload } = require('./upload')

module.exports = {
  authentication,
  controllerWrappers,
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus,
  validationUser,
  validationUpSubscription,
  upload
}
