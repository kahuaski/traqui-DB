const {DataTypes}=require('sequelize')
const {db}=require('../Database_tranqui/bd.config')

const Product=db.define('products',{

id:{
    type:DataTypes.INTEGER,
    primaryKey:true,
    autoIncrement:true,
    allowNull:false

},
id_restaurants:{
    type:DataTypes.INTEGER,
    allowNull:false
},

name:{
    type:DataTypes.STRING,
    allowNull:false
},

description:{
    type:DataTypes.TEXT,
    allowNull:false
},

price:{

    type:DataTypes.FLOAT,
    allowNull:false
},
image:{
    type:DataTypes.TEXT,
    allowNull:false,
     defaultValue:'users/1687320206111-HD-wallpaper-husky-and-sunset-dog-dogs-husky-lake-landscape-nature-sunset-water.jpg',
},
status:{
    type:DataTypes.ENUM('available','disable'),
    allowNull:false,
    defaultValue:'available'
},




})
module.exports=Product