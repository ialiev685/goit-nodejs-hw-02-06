
const Contact = require('../schemas/contact')

const addContact = async (body) => {
  try {
    const data = await Contact.create({ ...body })

    return data
  } catch (error) {
    console.table(error)
  }
}

module.exports = addContact
