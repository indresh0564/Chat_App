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

const getMessages = (req, res, next)=>{
    message_module.findAll()
    .then((response)=>{
        res.status(201).json({response:response});
    })
    .catch((error)=>{
        console.log(error);
    })
}

module.exports = {userMessage , getMessages};