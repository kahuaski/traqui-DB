const { DataTypes } = require("sequelize");
const { db } = require("../Database_tranqui/bd.config");

const Sale=db.define('sales',{
id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false
},
id_products:{
    type:DataTypes.INTEGER,
    allowNull:false
},
value:{
    type:DataTypes.INTEGER,
    allowNull:false
},
data_sale:{
    type:DataTypes.DATE,
    allowNull:false
},
total:{
    type:DataTypes.INTEGER,
    allowNull:false
},

status:{
    type:DataTypes.ENUM('available','disable'),
    allowNull:false,
    defaultValue:'available'
}


})

module.exports=Sale