const express = require('express')
const router = express.Router()

const { registerController, loginController, logoutController } = require('../../controllers/auth')

const { validationUser, authentication, controllerWrappers } = require('../../midlevares')

router.post('/signup', controllerWrappers(validationUser), controllerWrappers(registerController))

router.post('/login', controllerWrappers(validationUser), controllerWrappers(loginController))

router.post('/logout', controllerWrappers(authentication), controllerWrappers(logoutController))

module.exports = router
