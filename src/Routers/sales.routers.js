const express=require('express')
const salecontrollers=require('../controllers/sales.controllers')
const salemiddleware=require('../middlewares/sales.middlewares')


const routerA=express.Router()
routerA
.route('/')
.get(salecontrollers.findAllSale)
.post(salecontrollers.createSales)
//routerA.use(salemiddleware.validSales)
routerA
  .route('/:id')
  .get(salemiddleware.validSales, salecontrollers.findOneSale)
  .patch(salecontrollers.updateSale)
  .delete(salecontrollers.deleteSale)


module.exports=routerA