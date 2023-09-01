const message_module = require('../models/message');

const userMessage = (req, res, next)=>{
     const {message} = req.body;
    message_module.create({
        userMessage:message,
        userId : req.user.id
    })
    .then((data)=>{
        res.status(201).json({message:"successfuly store message into db", data:data})
    })
    .catch((err)=>{
        res.status(500).json({message:"something went wrong" , error:err});
    })
}

module.exports = {userMessage};