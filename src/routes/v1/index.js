const express = require('express');
const passport = require('passport');
const router = express.Router();
const jwt = require("jsonwebtoken");
const helpController = require("../../controller/helpController");

router.get("/help",helpController.helpDetails);

router.post('/signup',passport.authenticate('signup',{session:false}),async(req,res)=>{
    res.status(200).json({
        success: true,
        message:'Signup successfull',
        data:{
            user:req.user
        }
    });
});

router.post("/login", async(req,res,next)=>{
    passport.authenticate('login',async(err,user,info)=>{
        try{
            if(err || !user){
                const error = new Error('something went wrong');
                return next(error);
            }
            req.login(
                user,{session:false},
                async (err)=>{
                    if(err) return next(err);
                    const body = {_id:user._id,email:user.email};
                    const token = jwt.sign({user:body},'TOP_SECRET' );
                    return res.status(200).json({
                        token,
                    success:true,
                    message:"Successfully sign in"
                    });
                }
            )
        }catch(err){
            console.log(err);
            return next(err);
        }
    })
});



module.exports = router;