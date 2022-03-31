// MAP ELASTIC SEARCH
const elasticSearchClient = require('../config/elasticsearchConnection')

const mapElasticSearch = async (indexName, mappingType, mapping) => {
  console.log(mapping)
  return await elasticSearchClient.indices.putMapping({
    index: indexName,
    type: mappingType,
    body: mapping,
  })
}

module.exports = { mapElasticSearch }
