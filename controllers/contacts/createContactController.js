const controlContacts = require('../../model/contacts')

const createContactController = async (req, res, next) => {
  const updateData = await controlContacts.addContact(req.body)
  console.log(updateData)
  res.status(201).json(updateData)
}

module.exports = createContactController