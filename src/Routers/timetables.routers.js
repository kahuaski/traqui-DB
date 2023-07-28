const express=require('express')
const timetablecontrollers=require('../controllers/timetables.controllers')
const timetablemiddleware=require('../middlewares/timetables.middlewares')


const routerA=express.Router()
routerA
.route('/')
.get(timetablecontrollers.findAllTime)
.post(timetablecontrollers.createTime)
//routerA.use(timetablemiddleware.validClient)
routerA
  .route('/:id')
  .get(timetablemiddleware.validClient,timetablecontrollers.findOneTime)
  .patch(timetablecontrollers.updateTime)
  .delete(timetablecontrollers.deleteTime)


module.exports=routerA