const {DataTypes}=require('sequelize')
const {db}=require('../Database_tranqui/bd.config')

 const Delivery=db.define('deliveys',({
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false,
        unique:true
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    email:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{
        type:DataTypes.STRING,
        allowNull:false
    },
    city:{
        type:DataTypes.STRING,
        allowNull:false

    },
    status:{
        type:DataTypes.STRING,
        allowNull:false,
        defaultValue:'available'
    },
    


}))
modules.exports=Delivery