const express=require('express')
const ordercontrollers=require('../controllers/orders.controllers')
const ordermiddleware=require('../middlewares/orders.middlewares')


const routerA=express.Router()
routerA
.route('/')
.get(ordercontrollers.findAllOrders)
.post(ordercontrollers.createOrders)
routerA.use(ordermiddleware.validOrder)
routerA
  .route('/:id')
  .get(ordermiddleware.validOrder,ordercontrollers.findOneOrders)
  .patch(ordercontrollers.updateOrders)
  .delete(ordercontrollers.deleteOrders)


module.exports=routerA