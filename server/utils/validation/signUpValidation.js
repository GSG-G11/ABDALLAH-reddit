const Joi = require('joi');

const schema = Joi.object({
  userName: Joi.string()
    .alphanum()
    .min(3)
    .max(30)
    .required(),

  password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{3,30}$/),
  email: Joi.string()
    .email(),
});

const signUpValidation = (body) => schema.validateAsync(body);
module.exports = signUpValidation;
