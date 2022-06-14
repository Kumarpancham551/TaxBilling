const express = require('express');
const bodyParser = require('body-parser');
const passport = require("passport");
const { connect } = require("./src/config/database");
const User = require('./src/models/user');
const apiRouter = require("./src/routes/index");
const authRouter = require('./src/routes/authRoute');
const app = express();
require('./src/util/auth');

app.use(bodyParser.urlencoded({extended:false}));
app.use("/",authRouter)
app.use("/api",passport.authenticate('jwt',{session:false}),apiRouter);


app.listen(3000, async ()=>{
 
 await connect();
 console.log('serever started sucessfully');
 console.log("Mongo db connected successfully")


})