const createContactController = require('./createContactController.js')
const getContactByIdController = require('./getContactByIdController.js')
const getListContactsController = require('./getListContactsController.js')
const removeContactByIdController = require('./removeContactByIdController.js')
const updateContactByIdController = require('./updateContactByIdController.js')
const updateStatusContactController = require('./updateStatusContactController.js')

module.exports = {
  createContactController,
  getContactByIdController,
  getListContactsController,
  removeContactByIdController,
  updateContactByIdController,
  updateStatusContactController
}
