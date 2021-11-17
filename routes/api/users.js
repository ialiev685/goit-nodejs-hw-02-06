const express = require('express')
const router = express.Router()

const {
  registerController,
  loginController,
  logoutController,
  currentUser,
  upSabscriptionController,
  uploadAvatarController,
  verifyController
} = require('../../controllers/auth')

const { validationUser, validationUpSubscription, authentication, controllerWrappers, upload } = require('../../midlevares')

router.post('/signup', controllerWrappers(validationUser), controllerWrappers(registerController))

router.post('/login', controllerWrappers(validationUser), controllerWrappers(loginController))

router.post('/logout', controllerWrappers(authentication), controllerWrappers(logoutController))

router.post('/current', controllerWrappers(authentication), controllerWrappers(currentUser))

router.patch('/', controllerWrappers(authentication),
  controllerWrappers(validationUpSubscription),
  controllerWrappers(upSabscriptionController))

router.patch('/avatars/:id', controllerWrappers(authentication), upload.single('avatar'),
  controllerWrappers(uploadAvatarController))

router.get('/verify/:verificationToken', controllerWrappers(verifyController))

module.exports = router
