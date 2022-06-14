const express = require('express');
const { connect } = require("./src/config/database");
const User = require('./src/models/user');
const apiRouter = require("./src/routes/index");
const app = express();


app.use("/api",apiRouter);
app.get('/' , (req,res)=>{
    res.status(200);
    res.send({
        success: true,
        message:"Successfully hiting the api",
        data:{}

    })
})

app.listen(3000, async ()=>{
 
 await connect();
 console.log('serever started sucessfully');
 console.log("Mongo db connected successfully")

 let user = await User.create({email:"abcd@gmail.com",password:"1234567",username:"ABC"});
 console.log(user);

})