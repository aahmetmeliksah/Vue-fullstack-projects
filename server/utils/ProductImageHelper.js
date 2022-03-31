const httpStatus = require('http-status')
const path = require('path')
const util = require('util')

const addProductImage = (req, res) => {
  try {
    if (!req?.files?.product_image) {
      // console.log('================================')
      // console.log('IMAGE YOK')
      // console.log('================================')
      return res
        .sendStatus(httpStatus.BAD_REQUEST)
        .send({ message: 'An image needed' })
    } else {
      const extension = path.extname(req.files.product_image.name)
      const filename = `${
        req.files.product_image.name
      }${Date.now()}${extension}`

      const path1 = './../../client/src/assets/images'
      const folderPath = path.join(path1, filename)

      const allowedFileTypes = /png|jpeg|gif|jpg/
      if (!allowedFileTypes.test(extension)) {
        throw 'Upload png or jpeg or gif or jpg!'
      }
      req.files.product_image.mv(folderPath, (err) => {
        if (err)
          return res.sendStatus(httpStatus.INTERNAL_SERVER_ERROR).send(err)
      })

      res.json({ message: 'Image file uploaded successfully :)' })
      return filename
    }
  } catch (error) {
    console.log(error)
    res.sendStatus(500).json({
      message: error,
    })
  }
}

module.exports = { addProductImage }
