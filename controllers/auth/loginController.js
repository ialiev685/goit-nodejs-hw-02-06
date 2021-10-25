const controlUsers = require('../../model/users')

const loginController = async (req, res, next) => {
  const result = await controlUsers.loginUser(req.body)

  const { status } = result

  if (status === 200) {
    const { token, email, subscription } = result.data

    res.status(200).json({ token, user: { email, subscription } })
  }
}

module.exports = loginController
