const mongoose = require('mongoose')
const {model,connect, Schema } = mongoose

connect('mongodb+srv://diegopacheco:diego201219@cluster0.wsyla.mongodb.net/myFirstDatabase?retryWrites=true&w=majority').then(()=>{console.log("Base de datos conectada")}).catch((err)=>{console.error(err);})

var datos = new Schema({
nombre:String,
apellido:String,
num1:Number,
num2:Number,
num3:Number
})

module.exports= model('dataEs', datos)