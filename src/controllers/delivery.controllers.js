const Delivery = require("../models/client.modules");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall client

exports.findAllDelivery = catchAsync(async (req, res, next) => {
  try {
    
    const delivery = await Delivery.findAll({
      where: {
      
        status:'available'
      }
    });
    res.status(200).json({
      results: delivery.length,
      success: "ok",
      delivery,
    });
  } catch (error) {
    console.log(error)
  }
  
});

//create client
exports.createDelivery = catchAsync(async (req, res, next) => {
  const { name,  phone,email,address,city,} = req.body;
  const delivery = await Delivery.create({
    name,
    phone,
    email,
    address,
    city
  })
  res.status(200).json({
    status: "success",
    message: "Client created",
    delivery,
  })

  
});

//findOne client

exports.findOneDelivery = catchAsync(async (req, res, next) => {
  const {delivery } = req;
  res.status(200).json({
    status: "success",
    message: "Delivery found",
    delivery,
  });
});
//Update client
exports.updateDelivery = catchAsync(async (req, res, next) => {
  const { delivery } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Delivery with id:${delivery.id} updated`,
    client: {
      id: delivery.id,
      name: delivery.name,
      email: delivery.email,
      status: delivery.status,
    },
  });
});
//Delete client
exports.deleteDelivery = catchAsync(async (req, res, next) => {
  const { delivery } = req;
  await delivery.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Client with id:${delivery.id} deleted`,
  });
});
