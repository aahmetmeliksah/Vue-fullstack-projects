const pg = require('pg')
const dotenv = require("dotenv")
dotenv.config()

// CONNECT DATABASE
// SINCE THERE'S ONLY ONE CLIENT, I ASSIGNED IT AS MERELY CLIENT 
const client = new pg.Pool({
    connectionString: process.env.DB_CONNECTION_STRING
})

module.exports = client
