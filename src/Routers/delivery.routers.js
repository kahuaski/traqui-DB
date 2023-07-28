const express=require('express')
const deliverycontrollers=require('../controllers/delivery.controllers')
//const clientmiddleware=require('../middlewares/clients.middlewares')


const routerA=express.Router()
routerA
.route('/')
.get(deliverycontrollers.findAllDelivery)
.post(deliverycontrollers.createDelivery)
//routerA.use(clientmiddleware.validClient)
routerA
  .route('/:id')
  .get(deliverycontrollers.findOneDelivery)
  .patch(deliverycontrollers.updateDelivery)
  .delete(deliverycontrollers.deleteDelivery)


module.exports=routerA