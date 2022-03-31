const Joi = require('joi')

// SCHEMA A.K.A VALIDATION FOR ADDING PRODUCTS
const addProductSchema = Joi.object({
  product_name: Joi.string().min(3).max(150).required(),

  product_description: Joi.string().min(10).required(),

  category_name: Joi.string().min(3).max(150).required(),

  price: Joi.number(),

  category_id: Joi.number(),
})

module.exports = {
  addProductSchema,
}
