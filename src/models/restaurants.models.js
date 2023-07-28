const {DataTypes}=require("sequelize")
const {db}=require('../Database_tranqui/bd.config')

const Restaurant=db.define('restaurants',{
    id:{

        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    id_users:{

        type:DataTypes.INTEGER,
        allowNull:false
    },
    name:{
        type:DataTypes.STRING,
        allowNull:false
    },
    ruc:{
        type:DataTypes.STRING,
        allowNull:false
    },
    address:{

        type:DataTypes.STRING,
        allowNull:false
    },
    phone:{
        type:DataTypes.STRING,
        allowNull:false
    },
    description:{
        type:DataTypes.STRING,
        allowNull:false
    },
    type:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM('available','disable'),
        allowNull:false,
        defaultValue:'available'
    }
})
module.exports=Restaurant