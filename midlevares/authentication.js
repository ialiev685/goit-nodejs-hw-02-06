const jwt = require("jsonwebtoken");
const { User } = require("../model/schemas/users");
const { Unauthorized } = require("http-errors");

const authentication = async (req, res, next) => {
  try {
    console.log(req.body);
    const [bearer, token] = req.headers.authorization.split(" ");

    if (bearer !== "Bearer") {
      throw new Unauthorized("Not authorized");
    }

    const { SECRET_KEY } = process.env;
    const { id } = jwt.verify(token, SECRET_KEY);

    const result = await User.findById(id);

    if (!result) {
      throw new Unauthorized("Not authorized");
    }

    if (result.token !== token) {
      throw new Unauthorized("Not authorized");
    }

    req.user = result;
    next();
  } catch (error) {
    throw new Unauthorized("Not authorized");
  }
};

module.exports = { authentication };
