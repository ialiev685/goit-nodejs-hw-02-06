const fs = require('fs/promises')
const path = require('path')
const contacts = path.resolve('db', 'contacts.json')
const normalizationData = require('./normalizationData')

const removeContact = async (contactId) => {
  try {
    const data = await fs.readFile(contacts)
    const updateContacts = normalizationData(data).filter(({ id }) => id !== Number(contactId))
    await fs.writeFile(contacts, JSON.stringify(updateContacts))
    if (normalizationData(data).length > updateContacts.length) {
      return { status: 200 }
    } else {
      return { status: 404 }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = removeContact
