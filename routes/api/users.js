const express = require('express')
const router = express.Router()

const { registerController, loginController, logoutController, current } = require('../../controllers/auth')

const { validationUser, authentication, controllerWrappers } = require('../../midlevares')

router.post('/signup', controllerWrappers(validationUser), controllerWrappers(registerController))

router.post('/login', controllerWrappers(validationUser), controllerWrappers(loginController))

router.post('/logout', controllerWrappers(authentication), controllerWrappers(logoutController))

router.post('/current', controllerWrappers(authentication), controllerWrappers(current))

module.exports = router
