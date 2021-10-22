const Joi = require('joi')
// const createError = require('http-errors')

const validationRegisterUser = async(req, res, next) => {
  const schemaRegister = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required()
  })

  const { error } = schemaRegister.validate(req.body)

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, '')
    res.status(400).json({
      Status: 400,
      data: 'Bad Request',
      ResponseBody: text,
    })
    return
  }
  next()
}

module.exports = { validationRegisterUser }
