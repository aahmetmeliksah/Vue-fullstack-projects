const client = require('../config/dbConfig')
const logger = require('../logs/ProductsLogger')

// DISPLAY ALL PRODUCTS
const getAllProductsService = async () => {
  try {
    const text = `SELECT * FROM products`

    const result = await client.query(text)

    return result.rows
  } catch (error) {
    console.log(error.message)
  }
}

// DISPLAY A PRODUCT BY ID
const findProductByIdService = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const result = await client.query('SELECT * FROM products WHERE  id = $1', [
      id,
    ])

    console.log(result.rows)
    return result.rows
  } catch (error) {
    console.log(error.message)
  }
}

const removeProductByIdService = async (req, res) => {
  try {
    const id = parseInt(req.params.id)

    const result = await client.query('DELETE FROM products WHERE id = $1', [
      id,
    ])

    console.log(result.rows)
    return result.rows
  } catch (error) {
    console.log(error.message)
  }
}

// ADD A PRODUCT
const addProductService = async (req, res /*, filename*/) => {
  try {
    console.log(req.body)
    const text = `
    INSERT INTO products (
        product_name, 
        product_description, 
        category_name,
        price, 
        category_id,
        quantity
        )
    VALUES ($1, $2, $3, $4, $5, $6) RETURNING *`

    const values = [
      req.body.product_name,
      req.body.product_description,
      req.body.category_name,
      req.body.price,
      req.body.category_id,
      req.body.quantity,
      /*req.body.product_image,*/
      /*filename,*/
    ]

    const result = await client.query(text, values)
    await logger.log({
      level: 'info',
      message: result,
    })
    console.log(result.rows)
    return result.rows
  } catch (error) {
    console.log(error)
    return res.status(400).send(error)
  }
}

const updateProductByIdService = async (req, res) => {
  try {
    const id = parseInt(req.params.id)
    const {
      product_name,
      product_description,
      category_name,
      price,
      category_id,
      quantity,
      img_url,
    } = req.body

    const result = await client.query(
      `UPDATE products SET 
             product_name = $1,
             product_description = $2,
             category_name = $3, 
             price = $4,
             category_id = $5,
             quantity = $6,
             img_url = $7,
             WHERE id = $8`,
      [
        product_name,
        product_description,
        category_name,
        price,
        category_id,
        quantity,
        img_url,
        id,
      ]
    )
    console.log(result)
    return result.rows
  } catch (error) {
    console.log(error.message)
  }
}

const addProductImageService = async (req, res) => {
  try {
    const text = `UPDATE products
    SET product_image =$1
    WHERE id= $2 RETURNING *`

    const data = [filename, req.params.id]

    const result = await client.query(text, data)

    return result
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = {
  getAllProductsService,
  addProductService,
  findProductByIdService,
  removeProductByIdService,
  updateProductByIdService,
  // addProductImageService,
}
