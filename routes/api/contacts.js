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
  validationUpdateStatus
} = require('../../midlevares/validationContact')

router.get('/', getListContactsController)

router.get('/:contactId', getContactByIdController)

router.post('/', validationCreateContact, createContactController)

router.delete('/:contactId', removeContactByIdController)

router.patch('/:contactId', validationUpdateContact, updateContactByIdController)

router.patch('/:contactId/favorite', validationUpdateStatus, updateStatusContactController)

module.exports = router
