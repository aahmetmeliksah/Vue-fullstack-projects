const { elasticSearchClient } = require('../config/elasticsearchConnection')

elasticSearchClient.cluster.health({}, function (err, resp, status) {
  console.log('-- Client Health --', resp)
})

console.log(
  '==========================================================================================='
)
// Check how many documents are in the index
elasticSearchClient.count(
  { index: 'e_commerce1', type: 'products' },
  function (err, resp, status) {
    console.log('-- Products Document Count --', resp)
  }
)
