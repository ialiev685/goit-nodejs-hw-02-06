const Joi = require("joi");

const validationUpdateContact = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.any().allow(""),
    number: Joi.number()
      .integer()
      .min(89000000000)
      .max(89999999999)
      .allow("")
      .required(),
    // name: Joi.string().alphanum().min(2).max(10).allow("").required(),
    // email: Joi.string().email().allow("").required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, "");
    res.status(400).json({ message: text });
    return;
  }
  next();
};

const validationCreateContact = async (req, res, next) => {
  const schema = Joi.object({
    name: Joi.any().required(),
    number: Joi.number().integer().min(89000000000).max(89999999999).required(),
    // name: Joi.string().alphanum().min(2).max(10).required(),
    // email: Joi.string()
    //   .email()
    //   .required(),
    // favorite: Joi.boolean()
    //   .allow('')
  });

  const { error } = schema.validate(req.body);

  if (error) {
    const text = error?.details[0].message.replace(/["]/g, "");
    res.status(400).json({ message: text });
    return;
  }
  next();
};

const validationUpdateStatus = (req, res, next) => {
  const shema = Joi.object({
    favorite: Joi.boolean().required(),
  });

  const { error } = shema.validate(req.body);

  if (error) {
    res.status(400).json({ message: "missing field favorite" });
    return;
  }
  next();
};

module.exports = {
  validationUpdateContact,
  validationCreateContact,
  validationUpdateStatus,
};
