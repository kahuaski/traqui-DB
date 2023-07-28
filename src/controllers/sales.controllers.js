
const Sale = require("../models/sales.modules");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall

exports.findAllSale = catchAsync(async (req, res, next) => {
  try {
    const sale = await Sale.findAll({
      where: { 
        status:'available'
      }
    });
    res.status(200).json({
      results: sale.length,
      success: "ok",
      sale,
    });

  } catch (error) {
    console.log(error)
  }
  
});

//create Sales
exports.createSales = catchAsync(async (req, res, next) => {
  const { 
    id_products,
    value,
    data_sale,
    total,

   } = req.body;
  const sale = await Sale.create({
    id_products,
    value,
    data_sale,
    total,
      
  })
  res.status(200).json({
    status: "success",
    message: "Sales created",
    sale,
  })

  
});

//findOne Sales

exports.findOneSale = catchAsync(async (req, res, next) => {
  try {
    const { sale } = req;
  res.status(200).json({
    status: "success",
    message: "Sales found",
    sale,
  });
    
  } catch (error) {
    console.log(error)
  }
  
});
//Update Sale
exports.updateSale = catchAsync(async (req, res, next) => {
  const { sale } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Sale with id:${sale.id} updated`,
    product: {
        id: sale.id,
        id_products:sale.id_products,
        value:sale.value,
        data_sale:sale.data_sale,
        total:sale.total,            
      
    },
  });
});
//Delete Sale
exports.deleteSale = catchAsync(async (req, res, next) => {
  const { sale } = req;
  await product.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Sale with id:${sale.id} deleted`,
  });
});
