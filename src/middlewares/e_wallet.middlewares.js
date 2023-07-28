const E_wallet = require('../models/e-wallet.modules')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validWallet=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const wallet=await E_wallet.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!wallet ){
        return next(new AppError(`Order with id:${id} was not found...`,404))
     }
     req.wallet=wallet

     next()

})