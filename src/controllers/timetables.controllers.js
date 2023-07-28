
const TimeTable = require("../models/timetable.modules");
const catchAsync = require("../utils/catchASync");

//const {token}=require('morgan')
const AppError = require("../utils/appError");
const { add } = require("winston");
//findall

exports.findAllTime = catchAsync(async (req, res, next) => {
  const {id}=req.params
  if(!id){

    return res.status(400).json({
      status: "fail",
      message: "id is required",
    });
    next()
    
  }
  try {
    const timetable = await TimeTable.findAll({
      where: {
        id,
      }
    });
    res.status(200).json({
      results: timetable.length,
      success: "ok",
      timetable,
    });
  } catch (error) {
    console.log(error)
  }
  
});

//create Time 
exports.createTime = catchAsync(async (req, res, next) => {
  const { id_restaurants,day_week,time_start,time_end } = req.body;
  const time = await TimeTable.create({
    id_restaurants,
    day_week,
    time_start,
    time_end,
        
  })
  res.status(200).json({
    status: "success",
    message: "Time Table created",
    time,
  })

  
});

//findOne Time Table

exports.findOneTime = catchAsync(async (req, res, next) => {
  const { time } = req;
  res.status(200).json({
    status: "success",
    message: "Time Table found",
    time,
  });
});
//Update Time Table
exports.updateTime = catchAsync(async (req, res, next) => {
  const { time } = req;
  //const {name,email}=req.body
  res.status(200).json({
    status: "success",
    message: `Time table with id:${time.id} updated`,
    time: {
      id: time.id,
      id_restaurants: time.id_restaurants,
      day_week: time.day_week,
      time_start: time.time_start,
      time_end: time.time_end,      
      
    },
  });
});
//Delete Time Table
exports.deleteTime = catchAsync(async (req, res, next) => {
  const { time } = req;
  await TimeTable.update({ status: "disable" });
  res.status(200).json({
    status: "success",
    message: `Time Table with id:${time.id} deleted`,
  });
});
