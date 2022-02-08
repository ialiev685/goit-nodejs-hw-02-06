const currentUser = async (req, res, next) => {
  try {
    const { email, name, subscription } = req.user;
    res.status(200).json({ email, name, subscription });
  } catch (error) {
    throw new Error(error.message);
  }
};

module.exports = currentUser;
