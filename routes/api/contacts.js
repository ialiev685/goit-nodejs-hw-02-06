const express = require('express')
const router = express.Router()

const {
  createContactController,
  getContactByIdController,
  getListContactsController,
  removeContactByIdController,
  updateContactByIdController,
  updateStatusContactController
} = require('../../controllers/contacts')

const {
  validationCreateContact,
  validationUpdateContact,
  validationUpdateStatus,
  controllerWrappers,
  authentication
} = require('../../midlevares')

controllerWrappers(authentication)

router.get('/', controllerWrappers(authentication), getListContactsController)

router.get('/:contactId', controllerWrappers(authentication), getContactByIdController)

router.post('/', controllerWrappers(authentication), validationCreateContact, createContactController)

router.delete('/:contactId', controllerWrappers(authentication), removeContactByIdController)

router.patch('/:contactId', controllerWrappers(authentication), validationUpdateContact, updateContactByIdController)

router.patch('/:contactId/favorite', controllerWrappers(authentication), validationUpdateStatus, updateStatusContactController)

module.exports = router
