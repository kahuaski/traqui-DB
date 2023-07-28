const {DataTypes}=require('sequelize')
const {db} =require('../Database_tranqui/bd.config')

const User=db.define("users",{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
},
name:{
    type:DataTypes.STRING,
    allowNull:false
},

email:{
    type:DataTypes.STRING,
    allowNull:false,
    unique:true
},

password:{
    type:DataTypes.STRING,
    allowNull:false
},

phone:{
    type:DataTypes.INTEGER,
    allowNull:false
},
status:{
    type:DataTypes.ENUM('available','disable'),
    allowNull:false,
    defaultValue:'available'
}
})

module.exports=User