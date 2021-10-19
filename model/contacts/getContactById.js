// const fs = require('fs/promises')
// const path = require('path')
// const contacts = path.resolve('db', 'contacts.json')
// const normalizationData = require('./normalizationData')

const Contact = require('../schemas/contact')

const getContactById = async (contactId) => {
  try {
    // const data = await fs.readFile(contacts)

    const data = await Contact.findOne({ _id: contactId })

    // return normalizationData(data).find(({ id }) => id === Number(contactId))

    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = getContactById
