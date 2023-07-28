const Sale = require('../models/sales.modules')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validSales=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const sale=await Sale.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!sale){
        return next(new AppError(`Sales with id:${id} was not found...`,404))
     }
     req.sale=sale

     next()

})