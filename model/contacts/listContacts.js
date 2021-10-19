
const Contact = require('../schemas/contact')

const listContacts = async () => {
  try {
    const data = await Contact.find()

    return data
  } catch (error) {
    console.table(error)
  }
}

module.exports = listContacts
