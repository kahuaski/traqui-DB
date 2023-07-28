const E_wallet = require("../models/e-wallet.modules");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall

exports.findAllWallet = catchAsync(async (req, res, next) => {
const {id}=req.params
if(!id){
  console.log('no hay')
  return res.status(400).json({
      status: "fail",
      message: "no hay id",
    });

}
next()
  try {
  const wallet = await E_wallet.findAll({
    where: {
      id,
    }
  });
  res.status(200).json({
    results: wallet.length,
    success: "ok",
    wallet,
  });


 } catch (error) {
  console.log(error)
 }
  
});

//create E-Wallet
exports.createWallet = catchAsync(async (req, res, next) => {
  try {
    const { id_users, balance, balance_code,created_at, updated_at, deleted_at } = req.body;
    const wallet = await E_wallet.create({
      id_users,
      balance,
      balance_code,
      created_at,
      updated_at,
      deleted_at,
    })
    res.status(200).json({
      status: "success",
      message: "E-Wallet created",
      wallet,
    })
  
      
  } catch (error) {
  console.log(error)  
  }
  
});

//findOne E-Wallet

exports.findOneWallet = catchAsync(async (req, res, next) => {
  const { wallet } = req;
  res.status(200).json({
    status: "success",
    message: "E-wallet found",
    wallet,
  });
});
//Update E-Wallet
exports.updateWallet = catchAsync(async (req, res, next) => {
  const { wallet } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `E-Wallet with id:${wallet.id} updated`,
    wallet: {
      id: wallet.id,
      id_users: wallet.id_users,
      balance: wallet.balance,
      balance_code: wallet.balance_code,
      create_at: wallet.create_at,
      updated_at: wallet.updated_at,
      
    },
  });
});
//Delete E-wallet
exports.deleteWallet = catchAsync(async (req, res, next) => {
  const { wallet } = req;
  await wallet.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `E-Wallet with id:${wallet.id} deleted`,
  });
});
