// ADD DOCUMENT TO ELASTIC SEARCH

const elasticSearchClient = require('../config/elasticsearchConnection')

const insertDocument = async (indexName, _id, mappingType, data) => {
  return await elasticSearchClient.index({
    index: indexName,
    type: mappingType,
    id: _id,
    body: data,
  })
}

module.exports = { insertDocument }
