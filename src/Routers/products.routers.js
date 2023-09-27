const express=require('express')
const productcontrollers=require('../controllers/products.controllers')
const productmiddleware=require('../middlewares/products.middlewares')
const upload =require('../utils/multer')

const router=express.Router()
router
.route('/') 
.get(productcontrollers.findAllProduct)
.post(upload.single('ImageProducts'), productcontrollers.createProduct)
router.use('/:id',productmiddleware.validProduct)
router
  .route('/:id')
  .get(productmiddleware.validProduct,productcontrollers.findOneProduct)
  .patch(productcontrollers.updateProduct)
  .delete(productmiddleware.validProduct,productcontrollers.deleteProduct)


module.exports=router