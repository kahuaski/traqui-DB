
const Restaurant = require("../models/restaurants.models");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall

exports.findAllRestaurant = catchAsync(async (req, res, next) => {
  const restaurant = await Restaurant.findAll({
    where: {
     
      status: "available"
    }
  });
  res.status(200).json({
    results: restaurant.length,
    success: "ok",
    restaurant,
  });
}); 

//create Restaurants
exports.createRestaurant = catchAsync(async (req, res, next) => {
  const { 
    id_users,
    name,
    ruc,
    address,
    phone,
    description,
    type,
    } = req.body;
    console.log('entrar');
try {
  const restaurant = await Restaurant.create({
    id_users:id_users,
    name:name,
    ruc:ruc,
    address:address,
    phone:phone,
    description:description,
    type:type,
      })
      console.log('entrar');
  res.status(200).json({
    status: "success",
    message: "Restaurant created",
    restaurant,
  })

} catch (error) {
 console.log(error) 
}
    
  
});

//findOne Restaurant

exports.findOneRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;
  res.status(200).json({
    status: "success",
    message: "Restaurant found",
    restaurant,
  });
});
//Update Restaurant
exports.updateRestaurant = catchAsync(async (req, res, next) => {
  const { restaurant } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Restaurant with id:${restaurant.id} updated`,
    restaurant: {
        id: restaurant.id,
        name: req.body.name,
        email: req.body.email,
        phone: req.body.phone,
        address: req.body.address,
        description: req.body.description,
        type: req.body.type,
  
    },
  });
});
//Delete restaurant
exports.deleteProduct = catchAsync(async (req, res, next) => {
  const { restaurant } = req;
  await Restaurant.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Restaurant with id:${restaurant.id} deleted`,
  });
});
