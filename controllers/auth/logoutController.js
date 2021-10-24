
const controlUsers = require('../../model/users')

const logoutController = async(req, res, next) => {
  const { _id: id } = req.user

  const result = await controlUsers.logout(id)
  const { status } = result

  if (status === 204) res.status(204).json({ message: 'No Content' })
}

module.exports = logoutController
