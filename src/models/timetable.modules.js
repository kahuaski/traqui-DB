const { DataTypes } = require("sequelize");
const { db } = require("../Database_tranqui/bd.config");
 const TimeTable=db.define('timetable',{
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
day_week:{
    type:DataTypes.STRING,
    allowNull:false
},

time_start:{
    type:DataTypes.TIME,
    allowNull:false
},

time_end:{
    type:DataTypes.TIME,
    allowNull:false
}



 })
 module.exports=TimeTable