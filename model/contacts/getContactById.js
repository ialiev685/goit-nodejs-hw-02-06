const fs = require('fs/promises')
const path = require('path')
const contacts = path.resolve('db', 'contacts.json')
const normalizationData = require('./normalizationData')

const getContactById = async (contactId) => {
  try {
    const data = await fs.readFile(contacts)

    return normalizationData(data).find(({ id }) => id === Number(contactId))
  } catch (error) {
    console.log(error)
  }
}

module.exports = getContactById
