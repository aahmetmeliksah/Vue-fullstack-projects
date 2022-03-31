const axios = require('axios')

const getAllProducts = async () => {
  try {
    const response = await axios.get(`http://localhost:5000/products`)
    // console.log(response)
    return response.data
  } catch (error) {
    console.log(error.message)
  }
}

module.exports = getAllProducts()
