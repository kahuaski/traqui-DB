const { DataTypes } = require("sequelize");
const { db } = require("../Database_tranqui/bd.config");

const E_wallet=db.define('e_wallets',{
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
    balance:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    balance_code:{
        type:DataTypes.STRING,
        allowNull:false
    },
   
    status:{
        type:DataTypes.ENUM('available','disable'),
        allowNull:false,
        defaultValue:'available'
    },



})

module.exports=E_wallet