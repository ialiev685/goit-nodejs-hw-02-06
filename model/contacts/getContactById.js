
const Contact = require('../schemas/contact')

const getContactById = async (contactId) => {
  try {
    const data = await Contact.findOne({ _id: contactId })

    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = getContactById
