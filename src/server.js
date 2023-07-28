require('dotenv').config()
const app=require('./app')
const {db}=require('./Database_tranqui/bd.config')
db.authenticate()
.then(()=>console.log("DataBase..!!"))
.catch((error)=>console.log(error))
db.sync()
.then(()=>console.log('Database Authenticated'))
.catch((error)=>console.log(error))
//const PORT =process.env.PORT

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})  