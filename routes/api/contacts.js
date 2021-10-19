const express = require('express')
const router = express.Router()

const {
  createContactController,
  getContactByIdController,
  getListContactsController,
  removeContactByIdController,
  updateContactByIdController
} = require('../../controllers/contacts')

const { validationCreateContact, validationUpdateContact } = require('../../midlevares/validation')

router.get('/', getListContactsController)

router.get('/:contactId', getContactByIdController)

router.post('/', validationCreateContact, createContactController)

router.delete('/:contactId', removeContactByIdController)

router.patch('/:contactId', validationUpdateContact, updateContactByIdController)

module.exports = router
