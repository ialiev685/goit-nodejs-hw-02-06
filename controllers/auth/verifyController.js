const controlUsers = require('../../model/users')

const verifyController = async (req, res, next) => {
  const { verificationToken } = req.params

  const result = await controlUsers.verifyUser(verificationToken)

  const { verify } = result

  if (verify) res.status(200).json({ message: 'Verification successful' })
}

module.exports = verifyController
