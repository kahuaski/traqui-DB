const { DataTypes } = require("sequelize")
const {db}=require('../Database_tranqui/bd.config')

const  Additional =db.define('additionals',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    id_products:{
        type:DataTypes.INTEGER,
        allowNull:false,
       
        
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    
    price:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM('available','disable'),
        allowNull:false,
        defaultValue:'available'
    },


})

module.exports=Additional