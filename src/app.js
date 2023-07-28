const express=require('express')
const cors=require('cors')
const helmet=require('helmet')
const hpp=require('hpp')
const morgan=require('morgan')
const rateLimit=require('express-rate-limit')
const sanitizer=require('perfect-express-sanitizer')
//error management class


const app=express()
//routers
const usersRouter=require('./Routers/users.routers')
const clientRouter=require('./Routers/clients.routers')
const walletRouter=require('./Routers/e_wallet.routers')
const orderRouter=require('./Routers/orders.routers')
const productRouter=require('./Routers/products.routers')
const restaurantRouter=require('./Routers/restaurants.routers')
const saleRouter=require('./Routers/sales.routers')
const timeRouter=require('./Routers/timetables.routers')
const additionalRouter=require('./Routers/additional.routers')
const deliveryRouter=require('./Routers/delivery.routers')
const AppError = require('./utils/appError')
const globalErrorHandler = require('./controllers/error.controllers')
const limiter=rateLimit({
    max:100000,
    windowMS:60*60*1000,
    message:'Too many requests from this IP, please try again later'
})
app.use('/api/v1',limiter)
app.use(express.json())
//middleware
app.use(helmet())
app.use(sanitizer.clean({
    xss:true,
    noSql:true,
    sql:true
}))
if(process.env.NODE_ENV==='development'){
    app.use(morgan('dev'))
}
app.use(hpp())
app.use(cors())
//routes

app.use('/api/v1/users',usersRouter)
app.use('/api/v1/restaurants',restaurantRouter)
app.use('/api/v1/clients',clientRouter)
app.use('/api/v1/wallet',walletRouter)
app.use('/api/v1/products',productRouter)
app.use('/api/v1/orders',orderRouter)
app.use('/api/v1/sales',saleRouter)
app.use('/api/v1/timetables',timeRouter)
app.use('/api/v1/additionals',additionalRouter)
app.use('/api/v1/deliverys',deliveryRouter)

app.use('*',(req,res,next)=>{
    next(new AppError(`Cant find ${req.originalUrl} on this server..!`))

})
app.use(globalErrorHandler)

module.exports=app



