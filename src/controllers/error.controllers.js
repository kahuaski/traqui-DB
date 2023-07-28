const AppError=require('../utils/appError')
const logger=require('../utils/logger')
const handdleCastError23505=()=>{
    return new AppError('Duplicate field value: please use another value',400)
}
const handleJWTEXpiredError=()=>{
    return new AppError('Token has expired...!! please log in again ',401)
}
const handleJWTError=()=>{
    return new AppError('Invalid token...!! please log in again ',401)
}
const sendErrorDev=(err,res)=>{
    logger.info(err)
    res.status(err.statusCode||500).json({
        status:err.status||500,
        message:err.message||'Internal server error',
        stack:err.stack,
        error:err
    })
}
const sendErrorProd=(err,res)=>{
    logger.info(err)
    //Operational, trusted error: send message to client 
    if(err.isOperational){
        return res.status(err.statusCode).json({
            status:err.status,
            message:err.message
        })
    }else{
        //Send generic message
        return res.status(500).json({
            status:'Fail',
            message:'Something went very wrong..!',
            
        })
    }
}
const globalErrorHandler=(err,req,res,next)=>{
    err.statusCode=err.statusCode||500
    err.status=err.status||'Fail'
    if(process.env.NODE_ENV==='develoment'){
        sendErrorDev(err,res)
    }
    if(process.env.NODE_ENV==='production'){
            let error=err
            if(error.parent?.code==='23505')error = handdleCastError23505()
            if(error.name==='TokenExpiredError')error = handleJWTEXpiredError()
            if(error.name==='JsonWebTokenError')error = handleJWTError()
            sendErrorProd(error,res)
    
}
}

module.exports=globalErrorHandler