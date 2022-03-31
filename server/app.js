const express = require('express')
const { urlencoded } = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const fileUpload = require('express-fileupload')
const dotenv = require('dotenv')
const path = require('path')
const client = require('./config/dbConfig')

dotenv.config()
const app = express()

// IMPORT ROUTERS, CONTROLLERS, SERVICES
const router1 = require('./routes/productsRouter')

// MIDDLEWARES
app.use(helmet())
app.use(fileUpload())
app.use(express.json()) // body-parser
app.use(urlencoded({ extended: true }))
app.use(cors()) // allow cross platform request/responses
app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  )
  next()
})

// LISTEN TO SERVER
const PORT = process.env.PORT || 5000

// app.use("/uploads", express.static(path.join(__dirname,"/uploads/products/dosya_adi.jpg")))
// ---- UPDATE THIS
// ============================================================
app.use('/', router1)
// app.use("/categories", categoryRoute)
// app.use("/users", userRoute)

app.listen(PORT, () => {
  console.log(`Server started at port ${PORT}`)

  client.connect((err) => {
    if (err) throw err
    console.log(
      `Connected to the database successfully ===>>> ${process.env.DB_CONNECTION_STRING}`
    )
  })
})
