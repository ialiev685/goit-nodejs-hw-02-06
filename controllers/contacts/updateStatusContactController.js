const controlContacts = require('../../model/contacts')

const updateStatusContactController = async (req, res, next) => {
  const { contactId } = req.params

  const data = await controlContacts.updateStatusContact(contactId, req.body)

  data
    ? res.status(200).json(data)
    : res.status(404).json({ message: 'Not found' })
}

module.exports = updateStatusContactController
