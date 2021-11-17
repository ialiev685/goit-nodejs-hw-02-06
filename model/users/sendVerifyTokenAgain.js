const { User } = require('../schemas/users.js')
const { NotFound } = require('http-errors')
const sendMail = require('../../helpers')

const sendVerifyTokenAgain = async (body) => {
  try {
    const { email } = body
    const result = await User.findOne({ email }, '_id email verify verifyToken')
    if (!result) {
      throw new NotFound('Email not found')
    }
    const { email: mailTo, verify, verifyToken } = result

    if (!verify) {
      const msg = {
        to: mailTo,
        subject: 'Регистрация на сайте',
        html: `<p>Вы прошли регистрацию, пожалуйста подтвердите свой Email кликнув по <a href='http://localhost:3000/users/verify/${verifyToken}'><strong>ссылке подтверждения</strong></a></p>`,
      }
      sendMail(msg)
      return { status: 200 }
    }

    return { status: 400 }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = sendVerifyTokenAgain
