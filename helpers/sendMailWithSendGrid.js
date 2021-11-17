const { Forbidden } = require('http-errors')
const sgMail = require('@sendgrid/mail')

const sendMail = async (data) => {
  await sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  try {
    const message = { ...data, from: 'ialiev685@gmail.com' }
    await sgMail.send(message)
  } catch (error) {
    throw new Forbidden(error.message)
  }
}

module.exports = sendMail
