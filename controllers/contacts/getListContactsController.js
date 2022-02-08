const controlContacts = require('../../model/contacts')

const getListContactsController = async (req, res, next) => {
  // если пагинациия
  // let { page = 1, limit = 10, favorite = false } = req.query
  // limit = limit > 10 ? 10 : limit // выгрука не более 10
  // const data = await controlContacts.listContacts(page, limit, favorite)

  const data = await controlContacts.listContacts()
  res.status(200).json(data)
}

module.exports = getListContactsController
