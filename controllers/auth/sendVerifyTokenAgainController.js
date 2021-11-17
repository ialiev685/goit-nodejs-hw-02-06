
const controlUsers = require('../../model/users')

const sendVerifyTokenAgainController = async(req, res, next) => {
  const result = await controlUsers.sendVerifyTokenAgain(req.body)

  const { status } = result

  status === 200
    ? res.status(200).json({ message: 'Verification email sent' })
    : res.status(400).json({ message: 'Verification has already been passed' })
}

module.exports = sendVerifyTokenAgainController
