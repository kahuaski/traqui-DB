const Additional = require("../models/additionals.models");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall

exports.findAllAdditional = catchAsync(async (req, res, next) => {
  try {
    const additional = await Additional.findAll({
      where: {
        
        status:'available'
      }
    });
    res.status(200).json({
      results: additional.length,
      success: "ok",
      additional,
    });
   } catch (error) {
    console.log(error);
   }
    
});

//create users
exports.createAdditional = catchAsync(async (req, res, next) => {
 try {
  const { id_products, name, price } = req.body;
  const additional = await Additional.create({
    id_products,
    name,
    price,
  });
  res.status(200).json({
    status: "success",
    message: "Additional created",
    additional,
  });

 } catch (error) {
  console.log(error)
 }
  
});

//findOne users

exports.findOneAdditional = catchAsync(async (req, res, next) => {
  const { additional } = req;
  res.status(200).json({
    status: "success",
    message: "User found",
    additional,
  });
});
//Update Users
exports.updateAdditional = catchAsync(async (req, res, next) => {
  const { additional } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Additional with id:${additional.id} updated`,
    additional: {
      id: additional.id,
      name: additional.name,
      price: additional.price,
      status: additional.status,
    },
  });
});
//Delete users
exports.deleteAdditional = catchAsync(async (req, res, next) => {
  const { additional } = req;
  await Additional.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Additional with id:${additional.id} deleted`,
  });
});
