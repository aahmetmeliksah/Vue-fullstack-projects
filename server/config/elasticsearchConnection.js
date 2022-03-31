const elasticsearch = require('elasticsearch')

const elasticSearchClient = new elasticsearch.Client({
  hosts: 'http://localhost:9200',
})

module.exports = elasticSearchClient
