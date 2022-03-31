const elasticSearchClient = require('../config/elasticsearchConnection')
const { createIndex } = require('./create')
const { mapElasticSearch } = require('./mapping')
const { insertDocument } = require('./document_add')
const { searchDocument } = require('./search')

elasticSearchClient.ping(
  {
    requestTimeout: 1000,
  },
  async function (error) {
    if (error) {
      console.trace('Cannot access elasticsearch')
    } else {
      console.log('Elasticsearch is ready')
      try {
        /*
        //CreateIndex
        const resp = await createIndex('e_commerce1')
        console.log(resp)

        // Custom mapping for products
        const productMapping = {
          properties: {
            product_name: {
              type: 'text',
              analyzer: 'english',
              search_analyzer: 'english',
            },
            category_name: {
              type: 'text',
              analyzer: 'english',
              search_analyzer: 'english',
            },
            product_description: {
              type: 'text',
              analyzer: 'english',
              search_analyzer: 'english',
            },
            price: {
              type: 'integer',
            },
            category_id: {
              type: 'integer',
            },
            quantity: {
              type: 'integer',
            },
          },
        }
        const responseMap = await mapElasticSearch(
          'e_commerce1',
          'products',
          productMapping
        )

        // Add document to elastic search
        const data = [
          {
            product_name: 'Laptop 1',
            category_name: 'Electronics',
            product_description: 'Laptop Description 1',
            price: 523,
            category_id: 1,
            quantity: 27,
          },
          {
            product_name: 'Laptop 2',
            category_name: 'Electronics',
            product_description: 'Laptop Description 2',
            price: 523,
            category_id: 1,
            quantity: 27,
          },
          {
            product_name: 'Furniture 1',
            category_name: 'Furniture',
            product_description: 'Furniture Description 1',
            price: 523,
            category_id: 1,
            quantity: 27,
          },
        ]

        for (let i = 0; i < data.length; i++) {
          const responseDocument = await insertDocument(
            'e_commerce1',
            i + 1,
            'products',
            data[i]
          )
          console.log(responseDocument)
        }
*/
        // Search document
        const body = {
          query: {
            match_phrase_prefix: {
              product_name: 'Laptop',
            },
          },
        }
        const response = await searchDocument('e_commerce1', 'products', body)
        console.log(response)
      } catch (error) {
        console.log(error)
      }
    }
  }
)
