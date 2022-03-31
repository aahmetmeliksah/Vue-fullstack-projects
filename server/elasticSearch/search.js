// SEARCH DOCUMENT

const elasticSearchClient = require('../config/elasticsearchConnection')

const searchDocument = async (indexName, mappingType, searchQuery) => {
  return await elasticSearchClient.search({
    index: indexName,
    type: mappingType,
    body: searchQuery,
  })
}

module.exports = { searchDocument }
