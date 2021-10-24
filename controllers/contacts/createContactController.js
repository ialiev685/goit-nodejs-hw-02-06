const controlContacts = require('../../model/contacts')

const createContactController = async (req, res, next) => {
  const newContact = { ...req.body, owner: req.user._id }
  const updateData = await controlContacts.addContact(newContact)

  res.status(201).json(updateData)
}

module.exports = createContactController
