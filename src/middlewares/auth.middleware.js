const AppError=require('../utils/appError')
const {promisify}=require('util')
const catchAsync=require('../utils/catchASync')
const jwt=require('jsonwebtoken')
const User=require('../models/users.models')

exports.protect=catchAsync(async(req,res,next)=>{
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        token=req.headers.authorization.split(' ')[1]
    }
    if(!token){
        return next(new AppError('You have not logged in ...!!, please log in to get access',401))
    }
    const decoded=await promisify(jwt.verify)(
        token,
        process.env.JWT_SECRET_SEED
    )
    

const users=await User.findOne({
    where:{
        id:decoded.id,
        status:'available'
    }
})

if(!users){
    return next(new AppError('You have not logged in...!!, please log in to get access',401)
    )
}
req.sessionUser=users
next()
})
/*exports.protectAccoumtOwner=catchAsync(async(req,res,next)=>{
    const {users,sessionUser}=req
    if(users.id!==sessionUser.id){
        return next(new AppError('You have not logged in...!!, please log in to get access',401)
        )
    }


})
*/
