const Client = require("../models/client.modules");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall client

exports.findAllClient = catchAsync(async (req, res, next) => {
  try {
    
    const client = await Client.findAll({
      where: {
        
        status:'available'
      }
    });
    res.status(200).json({
      results: client.length,
      success: "ok",
      client,
    });
  } catch (error) {
    console.log(error)
  }
  
});

//create client
exports.createClient = catchAsync(async (req, res, next) => {
  const { name,  email, phone,address,city,} = req.body;
  const client = await Client.create({
    name,
    email,
    phone,
    address,
    city
  })
  res.status(200).json({
    status: "success",
    message: "Client created",
    client,
  })

  
});

//findOne client

exports.findOneClient = catchAsync(async (req, res, next) => {
  const {client } = req;
  res.status(200).json({
    status: "success",
    message: "client found",
    client,
  });
});
//Update client
exports.updateClient = catchAsync(async (req, res, next) => {
  const { client } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Client with id:${client.id} updated`,
    client: {
      id: client.id,
      name: client.name,
      price: client.price,
      status: client.status,
    },
  });
});
//Delete client
exports.deleteClient = catchAsync(async (req, res, next) => {
  const { client } = req;
  await client.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Client with id:${client.id} deleted`,
  });
});
