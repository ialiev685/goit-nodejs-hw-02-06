const controlUsers = require("../../model/users");

const registerController = async (req, res, next) => {
  const result = await controlUsers.registerUser(req.body);

  const { status } = result;

  if (status === 201) {
    console.log(result);
    const { email, name, subscription } = result.data;
    res.status(201).json({ user: { email, name, subscription } });
  }
};

module.exports = registerController;
