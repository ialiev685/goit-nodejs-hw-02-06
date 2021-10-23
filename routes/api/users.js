const express = require('express')
const router = express.Router()

const { registerController, loginController } = require('../../controllers/auth')

const { validationRegisterUser, authentication } = require('../../midlevares')

router.post('/signup', validationRegisterUser, registerController)

router.post('/login', authentication, validationRegisterUser, loginController)

module.exports = router
