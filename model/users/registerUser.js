const bcrypt = require('bcryptjs')
const { User } = require('../schemas/users.js')
const { Conflict } = require('http-errors')
const path = require('path')
const fs = require('fs/promises')
const gravatar = require('gravatar')
const sendMail = require('../../helpers')
const { v4: uuidv4 } = require('uuid')

const registerUser = async (body) => {
  try {
    const { email, password } = body

    const result = await User.findOne({ email })
    if (result) {
      throw new Conflict('Email in use')
    }

    // создаем шифрованный пароль
    const salt = bcrypt.genSaltSync(10)
    const hashPassword = bcrypt.hashSync(password, salt)

    // создаем дефолтную ссылку на аватар
    const avatarURL = gravatar.url(email, { s: '200', d: 'retro' }, false)

    // создай email token
    const verifyToken = uuidv4()

    // создаем сообщение для подтверждения регистрации
    const msg = {
      to: email,
      subject: 'Регистрация на сайте',
      html: `<p>Вы прошли регистрацию, пожалуйста подтвердите свой Email кликнув по <a href='http://localhost:3000/users/verify/${verifyToken}'><strong>ссылке подтверждения</strong></a></p>`,
    }

    await sendMail(msg)

    const data = await User.create({ email, password: hashPassword, avatarURL, verifyToken })

    const { id } = data
    const avatarDir = path.join(__dirname, '../../public/avatars', id)

    await fs.mkdir(avatarDir)

    return { status: 201, data }
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = registerUser
