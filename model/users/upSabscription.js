const { User, arrOptSubscription } = require('../schemas/users.js')
const { Unauthorized } = require('http-errors')

const upSabscription = async(id, body) => {
  try {
    const { subscription } = body

    if (!arrOptSubscription.includes(subscription)) {
      throw new Unauthorized("must be 'starter', 'pro', 'busines'")
    }
    const result = await User.findByIdAndUpdate(id, { subscription }, { new: true }).select('email subscription -_id')

    return result
  } catch (error) {
    throw new Error(error.message)
  }
}
module.exports = upSabscription
