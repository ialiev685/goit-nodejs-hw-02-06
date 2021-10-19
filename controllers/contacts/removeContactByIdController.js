
const controlContacts = require('../../model/contacts')

const removeContactByIdController = async (req, res, next) => {
  const { contactId } = req.params

  const data = await controlContacts.removeContact(contactId)
  data.status === 200
    ? res.status(200).json({ message: 'contact deleted' })
    : res.status(400).json({ message: 'Not found' })
}

module.exports = removeContactByIdController
