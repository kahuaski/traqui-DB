const { DataTypes } = require("sequelize");
const { db } = require("../Database_tranqui/bd.config");

const Order=db.define('orders',{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true,
        allowNull:false
    },
    id_client:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    id_product:{
        type:DataTypes.INTEGER,
        allowNull:false
    },
    date_orders:{
        type:DataTypes.DATE,
        allowNull:false
    },
    date_delivery:{
        type:DataTypes.DATE,
        allowNull:false
    },

    total_price:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    payment:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    discount:{
        type:DataTypes.DECIMAL(10,2),
        allowNull:false
    },
    note:{
        type:DataTypes.STRING,
        allowNull:false
    },
    status:{
        type:DataTypes.ENUM('available','disable'),
        allowNull:false,
        defaultValue:'available'
    },

})

module.exports=Order;