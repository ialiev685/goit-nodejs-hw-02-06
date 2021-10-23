
const controlUsers = require('../../model/users')

const registerController = async (req, res, next) => {
  const result = await controlUsers.registerUser(req.body)

  const { status } = result

  if (status === 409) res.status(409).json({ message: 'Email in use' })
  if (status === 201) {
    const { email, subscription } = result.data
    res.status(201).json({ users: { email, subscription } })
  }
}

module.exports = registerController
