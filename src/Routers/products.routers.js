const express=require('express')
const productcontrollers=require('../controllers/products.controllers')
const productmiddleware=require('../middlewares/products.middlewares')
const upload =require('../utils/multer')

const routerA=express.Router()
routerA
.route('/')
.get(productcontrollers.findAllProduct)
.post(upload.single('ImageProducts'), productcontrollers.createProduct)
//routerA.use(productmiddleware.validProduct)
routerA
  .route('/:id')
  .get(productmiddleware.validProduct,productcontrollers.findOneProduct)
  .patch(productcontrollers.updateProduct)
  .delete(productcontrollers.deleteProduct)


module.exports=routerA