const current = async(req, res, next) => {
  try {
    const { email, subscription } = req.user
    res.status(200).json({ email, subscription })
  } catch (error) {
    throw new Error(error.message)
  }
}

module.exports = current
