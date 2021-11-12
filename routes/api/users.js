const express = require('express')
const router = express.Router()

const { registerController, loginController, logoutController, currentUser, upSabscriptionController } = require('../../controllers/auth')

const { validationUser, validationUpSubscription, authentication, controllerWrappers } = require('../../midlevares')

router.post('/signup', controllerWrappers(validationUser), controllerWrappers(registerController))

router.post('/login', controllerWrappers(validationUser), controllerWrappers(loginController))

router.post('/logout', controllerWrappers(authentication), controllerWrappers(logoutController))

router.post('/current', controllerWrappers(authentication), controllerWrappers(currentUser))

router.patch('/', controllerWrappers(authentication),
  controllerWrappers(validationUpSubscription),
  controllerWrappers(upSabscriptionController))

router.patch('/avatars', controllerWrappers(authentication))

module.exports = router
