const Jimp = require('jimp')
const path = require('path')
const fs = require('fs/promises')
const { User } = require('../schemas/users.js')

const uploadAvatar = async (file, { id }) => {
  const { path: pathTmp, originalname } = file
  const pathUser = path.join(__dirname, '../../public/avatars', id, originalname)
  try {
    const normalizeAvatar = await Jimp.read(pathTmp)
    await normalizeAvatar.resize(250, 250)
    await normalizeAvatar.writeAsync(pathTmp)

    await fs.rename(pathTmp, pathUser)

    const image = `/avatars/${id}/${originalname}`

    const result = await User.findByIdAndUpdate(id, { avatarURL: image }, { new: true }).select('avatarURL')

    const { avatarURL } = result
    return { status: 200, avatarURL }
  } catch (error) {
    await fs.unlink(pathTmp)
    throw new Error(error.message)
  }
}

module.exports = uploadAvatar
