const Order = require("../models/orders.modules");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall

exports.findAllOrders = catchAsync(async (req, res, next) => {
  const order = await Order.findAll({
    where: {
      id,
    }
  });
  res.status(200).json({
    results: order.length,
    success: "ok",
    order,
  });
});

//create Orders
exports.createOrders = catchAsync(async (req, res, next) => {
  const { id_client, id_products, date_orders, date_delivery, total_price,payment,discount,note } = req.body;
  const order = await Order.create({
    id_client,
    id_products,
    date_orders,
    date_delivery,
    total_price,
    payment,
    discount,
    note,

  })
  res.status(200).json({
    status: "success",
    message: "Orders created",
    order,
  })

  
});

//findOne Orders

exports.findOneOrders = catchAsync(async (req, res, next) => {
  const { order } = req;
  res.status(200).json({
    status: "success",
    message: "Orders found",
    order,
  });
});
//Update Orders
exports.updateOrders = catchAsync(async (req, res, next) => {
  const { order } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Orders with id:${order.id} updated`,
    order: {
      id: order.id,
      id_client: order.id_client,
      id_products: order.id_products,
      date_orders: order.date_orders,
      date_delivery: order.date_delivery,
      total_price: order.total_price,
      payment: order.payment,
      discount: order.discount,
      note: order.note,
      
    },
  });
});
//Delete Orders
exports.deleteOrders = catchAsync(async (req, res, next) => {
  const { order } = req;
  await wallet.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Orders with id:${order.id} deleted`,
  });
});
