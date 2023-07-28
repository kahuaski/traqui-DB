

const Additional = require('../models/additionals.models')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validAdditional=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const additional=await Additional.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!additional){
        return next(new AppError(`Additional with id:${id} was not found...`,404))
     }
     req.additional=additional

     next()

})
