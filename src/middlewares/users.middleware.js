const User=require('../models/users.models')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validUser=catchAsync(async(req,res,next)=>{
    const {id}=req.params
    const users=await User.findOne({
        where:{
            id,
            status:'available'
        }
    })
    if(!users){
        return next(new AppError(`User with id:${id} was not found...`,404))
     }
     req.users=users

     next()

})
