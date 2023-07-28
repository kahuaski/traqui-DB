const express=require('express')
const additionalcontrollers=require('../controllers/additionals.controllers')
const additionalmiddleware=require('../middlewares/additional.middleware')


const routerA=express.Router()
routerA
.route('/')
.get(additionalcontrollers.findAllAdditional)
.post(additionalcontrollers.createAdditional)
routerA.use(additionalmiddleware.validAdditional)
routerA
  .route('/:id')
  .get(additionalmiddleware.validAdditional,additionalcontrollers.findOneAdditional)
  .patch(additionalcontrollers.updateAdditional)
  .delete(additionalcontrollers.deleteAdditional)


module.exports=routerA