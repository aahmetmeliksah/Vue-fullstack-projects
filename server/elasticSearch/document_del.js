const { elasticSearchClient } = require('../config/elasticsearchConnection')

elasticSearchClient.delete(
  {
    index: 'e_commerce1',
    id: '100',
    type: 'products',
  },
  function (err, resp, status) {
    console.log(resp)
  }
)

// THIS IS THE CODE FOR DELETE DOCUMENT BY QUERY DO NOT USE CODE SNIPPET ABOVE UNLESS YOU WANNA DELETE SOME  //DOCUMENT
