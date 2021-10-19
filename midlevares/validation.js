const Joi = require('joi')

const validationUpdateContact = async (req, res, next) => {
  const shema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(2)
      .max(10)
      .allow('')
      .required(),
    email: Joi.string()
      .email()
      .allow('')
      .required(),
    phone: Joi.number()
      .integer()
      .min(89000000000)
      .max(89999999999)
      .allow('')
      .required(),

  })

  const { error } = shema.validate(req.body)

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, '')
    res.status(400).json({ message: text })
    return
  }
  next()
}

const validationCreateContact = async (req, res, next) => {
  const shema = Joi.object({
    name: Joi.string()
      .alphanum()
      .min(2)
      .max(10)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    phone: Joi.number()
      .integer()
      .min(89000000000)
      .max(89999999999)
      .required()
  })

  const { error } = shema.validate(req.body)

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, '')
    res.status(400).json({ message: text })
    return
  }
  next()
}

module.exports = {
  validationUpdateContact,
  validationCreateContact
}
