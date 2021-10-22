
const Contact = require('../schemas/contact')

const removeContact = async (contactId) => {
  try {
    const data = await Contact.findOneAndRemove({ _id: contactId }, { rawResult: true })
    console.log(data.value)
    if (data.value) {
      return { status: 200 }
    } else {
      return { status: 404 }
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = removeContact
