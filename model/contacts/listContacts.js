// const fs = require('fs/promises')
// const path = require('path')
// const contacts = path.resolve('db', 'contacts.json')
// const normalizationData = require('./normalizationData')
const Contact = require('../schemas/contact')

const listContacts = async () => {
  try {
    const data = await Contact.find()
    // const data = await fs.readFile(contacts)

    // return normalizationData(data)
    return data
  } catch (error) {
    console.table(error)
  }
}

module.exports = listContacts
