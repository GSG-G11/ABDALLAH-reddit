const Joi = require('joi');

const schema = Joi.object({
  userName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
});

const signInValidation = (body) => schema.validateAsync(body);
module.exports = signInValidation;
