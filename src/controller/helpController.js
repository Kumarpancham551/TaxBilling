const helpDetails = (req,res)=>{
    res.status(200).send({
        message: "Successfully hitting the help api",
        success:true,
        data:{
            contct:"+91XXXXXXXX"
        }
    })
}

module.exports = {
    helpDetails
}