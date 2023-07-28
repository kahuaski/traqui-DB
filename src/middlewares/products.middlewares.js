const Product = require('../models/products.models')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validProduct=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const product=await Product.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!product){
        return next(new AppError(`Client with id:${id} was not found...`,404))
     }
     req.product=product

     next()

})