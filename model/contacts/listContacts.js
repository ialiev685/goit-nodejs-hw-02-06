const Contact = require('../schemas/contact')

const listContacts = async (id) => {
  try {
    const data = await Contact.find({ owner: id })
    // const data = favorite
    //   ? await Contact.paginate({ favorite }, { page, limit })
    //   : await Contact.paginate({}, { page, limit })

    return data
  } catch (error) {
    console.table(error)
  }
}

module.exports = listContacts
