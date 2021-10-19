const controlContacts = require('../../model/contacts')

const updateContactByIdController = async (req, res, next) => {
  const { contactId } = req.params

  //   const shema = Joi.object({
  //     name: Joi.string()
  //       .alphanum()
  //       .min(2)
  //       .max(10)
  //       .allow('')
  //       .required(),
  //     email: Joi.string()
  //       .email()
  //       .allow('')
  //       .required(),
  //     phone: Joi.number()
  //       .integer()
  //       .min(89000000000)
  //       .max(89999999999)
  //       .allow('')
  //       .required(),

  //   })

  //   const { error, value } = shema.validate(req.body)
  //   console.log(value)

  //   if (error) {
  //     const text = error?.details[0].message.replace(/["]/g, '')
  //     res.status(400).json({ message: text })
  //     return
  //   }
  const obj = Object.keys(req.body)
  const updateItems = {}

  for (const key of obj) {
    if (req.body[key].trim().length !== 0) updateItems[key] = req.body[key]
  }

  const data = await controlContacts.updateContact(contactId, updateItems)
  data
    ? res.status(200).json(data)
    : res.status(404).json({ message: 'Not found' })
}

module.exports = updateContactByIdController
