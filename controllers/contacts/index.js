const createContactController = require('./createContactController.js')
const getContactByIdController = require('./getContactByIdController.js')
const getListContactsController = require('./getListContactsController.js')
const removeContactByIdController = require('./removeContactByIdController.js')
const updateContactByIdController = require('./updateContactByIdController.js')

module.exports = {
  createContactController,
  getContactByIdController,
  getListContactsController,
  removeContactByIdController,
  updateContactByIdController
}
