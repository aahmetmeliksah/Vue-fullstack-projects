const { elasticSearchClient } = require('../config/elasticsearchConnection')

elasticSearchClient.indices.delete(
  { index: 'products' },
  (err, resp, status) => {
    console.log('delete', resp)
  }
)

// DO NOT RUN THIS SNIPPET, IT IS ONLY to show how to delete an index
