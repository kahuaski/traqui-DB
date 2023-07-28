const express=require('express')
const restaurantcontrollers=require('../controllers/restaurants.controllers')
const restaurantmiddleware=require('../middlewares/restaurants.middlewares')


const routerA=express.Router()

routerA

.route('/')
.get(restaurantcontrollers.findAllRestaurant)
.post(restaurantcontrollers.createRestaurant)
//routerA.use(restaurantmiddleware.validRestaurant)
routerA
  .route('/:id')
  .get(restaurantmiddleware.validRestaurant,restaurantcontrollers.findOneRestaurant)
  .patch(restaurantcontrollers.updateRestaurant)
  .delete(restaurantcontrollers.deleteProduct)


module.exports=routerA