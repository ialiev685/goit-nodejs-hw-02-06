const Joi = require('joi')
const { BadRequest } = require('http-errors')

const validationUser = async (req, res, next) => {
  const schemaRegister = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })

  const { error } = schemaRegister.validate(req.body)

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, '')
    // res.status(400).json({
    //   Status: '400 Bad Request',
    //   message: text,
    // })
    throw new BadRequest(text)
    // return
  }
  next()
}

const validationUpSubscription = async (req, res, next) => {
  const schemaRegister = Joi.object({

    subscription: Joi.string().required()
  })

  const { error } = schemaRegister.validate(req.body)

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, '')
    // res.status(400).json({
    //   Status: '400 Bad Request',
    //   message: text,
    // })
    throw new BadRequest(text)
    // return
  }
  next()
}

module.exports = {
  validationUser,
  validationUpSubscription,
}
