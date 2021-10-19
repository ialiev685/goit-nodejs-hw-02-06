const Contact = require('../schemas/contact')

const updateStatusContact = async(contactId, body) => {
  try {
    const data = await Contact.findOneAndUpdate({ _id: contactId }, { ...body }, { new: true })

    return data
  } catch (error) {
    console.log(error)
  }
}

module.exports = updateStatusContact
