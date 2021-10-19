
const Contact = require('../schemas/contact')

const updateContact = async (contactId, body) => {
  try {
    const data = await Contact.findOneAndUpdate({ _id: contactId }, { ...body }, { new: true })
    console.log(data)
    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = updateContact
