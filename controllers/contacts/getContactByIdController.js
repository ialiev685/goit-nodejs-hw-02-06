
const controlContacts = require('../../model/contacts')

const getContactByIdController = async (req, res, next) => {
  const { contactId } = req.params

  const data = await controlContacts.getContactById(contactId)
  data ? res.status(200).json(data) : res.status(404).json({ message: 'Not found' })
}

module.exports = getContactByIdController
