const express = require('express')
const router = express.Router()

const { registerController, loginController } = require('../../controllers/auth')

const { validationRegisterUser } = require('../../midlevares/validationUser')

router.post('/signup', validationRegisterUser, registerController)

router.post('/login', validationRegisterUser, loginController)

module.exports = router
