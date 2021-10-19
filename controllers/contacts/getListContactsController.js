const controlContacts = require('../../model/contacts')

const getListContactsController = async (req, res, next) => {
  const data = await controlContacts.listContacts()

  res.status(200).json(data)
}

module.exports = getListContactsController
