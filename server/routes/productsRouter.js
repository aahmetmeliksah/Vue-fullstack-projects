const express = require('express')
const router1 = express.Router() // for sellers
// const router2 = express.Router() for shoppers
// const router3 = express.Router() for admin
// const validate = require('../middlewares/validate')
// const { addProductSchema } = require('../validations/ProductsValidation')

// IMPORT CONTROLLERS
const {
  getAllProductsController,
  addProductController,
  findProductByIdController,
  removeProductByIdController,
  updateProductByIdController,
  getProductThroughSearch,
  // addProductImageController,
} = require('../controllers/productsController')

/* Before updating or deleting the product, ask the user if they're sure about it. Warn them that this action cannot be undone ---A feature I will add later--- */

router1.get('/products', getAllProductsController) // display all products

router1.get('/products/:id', findProductByIdController) // display a product by id

router1.delete('/products/:id', removeProductByIdController) // remove a product by id

router1.put('/products/:id', updateProductByIdController) // update a product by id

router1.route('/addproduct').post(addProductController) // add a product

router1.route('/search').post(getProductThroughSearch) // search for a product

// router1.route('/:id/uploadphoto').post(addProductImageController)

module.exports = router1
