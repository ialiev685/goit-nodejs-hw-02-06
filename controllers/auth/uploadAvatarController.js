const controlUsers = require('../../model/users')

const uploadAvatarController = async (req, res) => {
  const result = await controlUsers.uploadAvatar(req.file, req.params)

  const { status, avatarURL } = result

  if (status === 200) {
    res.status(200).json({ avatarURL })
  }
}

module.exports = uploadAvatarController
