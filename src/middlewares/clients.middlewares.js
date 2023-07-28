const Client = require('../models/client.modules')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validClient=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const client=await Client.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!client){
        return next(new AppError(`Client with id:${id} was not found...`,404))
     }
     req.client=client

     next()

})