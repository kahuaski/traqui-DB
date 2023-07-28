const express=require('express')
const clientcontrollers=require('../controllers/clients.controllers')
const clientmiddleware=require('../middlewares/clients.middlewares')


const routerA=express.Router()
routerA
.route('/')
.get(clientcontrollers.findAllClient)
.post(clientcontrollers.createClient)
routerA.use(clientmiddleware.validClient)
routerA
  .route('/:id')
  .get(clientmiddleware.validClient,clientcontrollers.findOneClient)
  .patch(clientcontrollers.updateClient)
  .delete(clientcontrollers.deleteClient)


module.exports=routerA