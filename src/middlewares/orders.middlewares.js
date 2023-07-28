const Order = require('../models/orders.modules')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validOrder=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const order=await Order.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!order){
        return next(new AppError(`Order with id:${id} was not found...`,404))
     }
     req.order=order

     next()

})