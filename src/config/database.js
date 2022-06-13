const mongoose = require('mongoose');

const connect = () =>{
    console.log("mongoose concetion requested");
    return mongoose.connect('mongodb://localhost/BillingDB');
}
module.exports ={
    connect
}