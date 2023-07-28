const TimeTable = require('../models/timetable.modules')
const AppError=require('../utils/appError')
const catchAsync=require('../utils/catchASync')

exports.validClient=catchAsync(async(req,res,next)=>{
    const {id}=req.params
   const time=await TimeTable.findOne({
        where:{
            id,
           
        }
    })
    if(!time){
        return next(new AppError(`Time Table with id:${id} was not found...`,404))
     }
     req.time=time

     next()

})