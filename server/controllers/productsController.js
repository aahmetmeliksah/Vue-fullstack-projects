const logger = require('../logs/ProductsLogger')

// IMPORT SERVICES
const {
  getAllProductsService,
  addProductService,
  findProductByIdService,
  removeProductByIdService,
  updateProductByIdService,
  // addProductImageService,
} = require('../services/productsService')
const insertDocument = require('../elasticSearch/document_add')
const searchWithElastic = require('../elasticSearch/search')
// const { addProductImage } = require('../utils/ProductImageHelper')

// ADD A PRODUCT
const addProductController = async (req, res) => {
  try {
    // const filename = addProductImage(req, res)

    const result = await addProductService(req, res /*, filename*/)

    res.send(result)
    insertDocument('e_commerce1', result.id, 'products', result)
  } catch (error) {
    console.log(error)
    res.send(error)
  }
}

// DISPLAY ALL PRODUCTS
const getAllProductsController = async (req, res) => {
  const result = await getAllProductsService(req, res)
  logger.log({
    level: 'info',
    message: result,
  })
  res.status(200).send(result)
}

// DISPLAY A PRODUCT BY ID
const findProductByIdController = async (req, res) => {
  const result = await findProductByIdService(req, res)
  logger.log({
    level: 'info',
    message: result,
  })
  res.status(200).send(result)
}

// REMOVE A PRODUCT BY ID
const removeProductByIdController = async (req, res) => {
  const result = await removeProductByIdService(req, res)
  logger.log({
    level: 'info',
    message: result,
  })
  res.status(200).send(result)
  console.log(`Product with id ${req.params.id} is REMOVED!`)
}

// UPDATE A PRODUCT BY ID
const updateProductByIdController = async (req, res) => {
  const result = await updateProductByIdService(req, res)
  logger.log({
    level: 'info',
    message: result,
  })
  res.status(200).send({ result, message: 'Product UPDATED' })
}

const getProductThroughSearch = async (req, res) => {
  const searchResult = searchWithElastic(
    'products',
    'product',
    req.body.data.searchInput
  )
  const result = findProductByIdController(searchResult.id)
  res.status(200).send(result)
}

// const addProductImageController = async (req, res) => {
//   const filename = await addProductImage(req, res)

//   const result = await addProductImageService(req, filename)

//   res.status(200).send('Image uploaded successfully')
// }

module.exports = {
  getAllProductsController,
  addProductController,
  findProductByIdController,
  removeProductByIdController,
  updateProductByIdController,
  getProductThroughSearch,
  // addProductImageController,
}
