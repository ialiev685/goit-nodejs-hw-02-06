const fs = require('fs/promises')
const path = require('path')
const contacts = path.resolve('db', 'contacts.json')
const normalizationData = require('./normalizationData')

const addContact = async (body) => {
  try {
    const data = await fs.readFile(contacts)
    const processedData = normalizationData(data)
    const id = processedData.length + 1
    const newContact = { id, ...body }
    const updateContacts = JSON.stringify([...processedData, newContact])
    await fs.writeFile(contacts, updateContacts)
    return newContact
  } catch (error) {
    console.table(error)
  }
}

module.exports = addContact
