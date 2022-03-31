// CREATE ELASTIC SEARCH INDEX

const elasticSearchClient = require('../config/elasticsearchConnection')

const createIndex = async (indexName) => {
  // check if there's such index in elastic search
  try {
    const response = await elasticSearchClient.indices.exists({
      index: indexName,
    })
    if (response.body) {
      console.log('Index already exists')
    } else {
      console.log('Index does not exist')
      // create index
      const responseIndex = await elasticSearchClient.indices.create({
        index: indexName,
      })
      console.log(responseIndex)
    }
  } catch (error) {
    console.log(error)
  }
}

module.exports = { createIndex }
