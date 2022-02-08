const controlContacts = require('../../model/contacts')

const updateContactByIdController = async (req, res, next) => {
  const { contactId } = req.params

  const obj = Object.keys(req.body)

  const updateItems = {}

  for (const key of obj) {
    const value = req.body[key].toString().trim().length

    if (value !== 0) {
      updateItems[key] =
        key === 'number' ? Number(req.body[key]) : req.body[key]
    }
  }

  const data = await controlContacts.updateContact(contactId, updateItems)
  data
    ? res.status(200).json(data)
    : res.status(404).json({ message: 'Not found' })
}

module.exports = updateContactByIdController
