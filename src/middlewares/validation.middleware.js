const {body,validationResult}=require('express-validator')
const validFields=(req,res,next)=>{
    const errors=validationResult(req)
    if(!errors.isEmpty()){
        return res.status(400).json({
            status:'error',
            errors:errors.mapped()})
    }
    next()
}
exports.createUSersValidation=[
    body('name').notEmpty().withMessage('name cannot be empty'),
    body('email').notEmpty().withMessage('email is not valid').isEmail(),
    body('password').notEmpty().withMessage('password cannot be empty').isLength({min:8}).withMessage('password must be at least 8 characters'),
    validFields
]


exports.loginUsersValidation=[
    body('email').notEmpty().withMessage('email is not valid').isEmail(),
    body('password').notEmpty().withMessage('password cannot be empty').isLength({min:8}).withMessage('password must be at least 8 characters'),
    validFields
]
