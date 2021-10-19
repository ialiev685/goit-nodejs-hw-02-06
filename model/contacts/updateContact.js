const fs = require('fs/promises')
const path = require('path')
const contacts = path.resolve('db', 'contacts.json')
const normalizationData = require('./normalizationData')

const updateContact = async (contactId, body) => {
  try {
    const data = await fs.readFile(contacts)
    let newContact = null
    const updateContacts = normalizationData(data).map((el) => {
      if (el.id === Number(contactId)) {
        newContact = { ...el, ...body }
        return { ...el, ...body }
      }
      return el
    })
    await fs.writeFile(contacts, JSON.stringify([...updateContacts]))

    return newContact
  } catch (error) {
    console.log(error)
  }
}

module.exports = updateContact
