const express=require('express')
const usersControllers=require('../controllers/users.controllers')
//Middleware
const usersMiddlewares=require('../middlewares/users.middleware')
const validationMiddleware=require('../middlewares/validation.middleware')
const authMiddleware=require('../middlewares/auth.middleware')

const router=express.Router()

router
.route('/')
.get(usersControllers.findAllUser)
.post(validationMiddleware.createUSersValidation,usersControllers.createUser)

router
.post('/login',validationMiddleware.loginUsersValidation,usersControllers.loginUser)

//router.use(authMiddleware.protect)

router
.route('/:id')
.get(usersMiddlewares.validUser, usersControllers.findOneUser)
.patch(usersMiddlewares.validUser,usersControllers.deleteUSer)

module.exports=router


