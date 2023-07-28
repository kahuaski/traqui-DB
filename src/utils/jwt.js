const jwt=require('jsonwebtoken')
require('dotenv')
const genereteJWT=(id)=>{
    return new Promise((resolve,reject)=>{
        const payload={id}

        jwt.sign(payload,
            process.env.JWT_SECRET_SED,
            {
                expiresIn:process.env.JWT_EXPIRE_IN
            },
            (err,token)=>{
            if(err){
                console.log(err)
                reject(err)
            }
            resolve(token)
        })
    })
}

module.exports=genereteJWT