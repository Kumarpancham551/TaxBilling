const express = require('express');
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

app.listen(3000, ()=>{
 console.log('serever started sucessfully');
})