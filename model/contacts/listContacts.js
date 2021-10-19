const fs = require('fs/promises')
const path = require('path')
const contacts = path.resolve('db', 'contacts.json')
const normalizationData = require('./normalizationData')

const listContacts = async () => {
  try {
    const data = await fs.readFile(contacts)

    return normalizationData(data)
  } catch (error) {
    console.table(error)
  }
}

module.exports = listContacts
