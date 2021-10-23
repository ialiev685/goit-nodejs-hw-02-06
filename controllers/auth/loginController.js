const controlUsers = require('../../model/users')

const loginController = async (req, res, next) => {
  const result = await controlUsers.loginUser(req.body)

  const { status } = result

  if (status === 401) res.status(400).json({ message: 'Email or password is wrong' })
}

module.exports = loginController
