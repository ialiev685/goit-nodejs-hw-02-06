const express = require('express')
const router = express.Router()

const { registerController } = require('../../controllers/auth')

const { validationRegisterUser } = require('../../midlevares/validationUser')

router.post('/signup', validationRegisterUser, registerController)

module.exports = router
