const user_model = require('../models/user');
const jwt = require('jsonwebtoken');

const authenticate = (req, res, next)=>{
    const token = req.header("Authorization");
    console.log(token);
    const user = jwt.verify(token, "secretKey");

    user_model.findByPk(user.userId)
    .then((user)=>{
       req.user = user;
       next();
    })
    .catch((err)=>{
       res.status(500).json({error:err});
    })
}

module.exports = {authenticate};