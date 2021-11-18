const nodemailer = require('nodemailer')
const { Forbidden } = require('http-errors')
require('dotenv').config()

const { EMAIL_PASS } = process.env

const nodemailerConfig = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'ialiev685@gmail.com',
    pass: EMAIL_PASS,
  },

}

const transporter = nodemailer.createTransport(nodemailerConfig)

const sendMail = async (data) => {
  try {
    const message = { ...data, from: 'ialiev685@gmail.com', }
    await transporter.sendMail(message)
  } catch (error) {
    throw new Forbidden(error.message)
  }
}

module.exports = sendMail
