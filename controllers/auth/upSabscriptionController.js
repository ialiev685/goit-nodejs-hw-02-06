const controlUsers = require('../../model/users')

const upSabscriptionController = async(req, res) => {
  const result = await controlUsers.upSabscription(req.user._id, req.body)

  const { email, subscription } = result
  res.status(200).json({ email, subscription })
}
module.exports = upSabscriptionController
