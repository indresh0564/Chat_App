const { json } = require('body-parser');
const user_model = require('../models/user');
const bcrypt = require('bcrypt');

const User = (req, res)=>{
        try{
            const {name , email, contact , password } = req.body;
            const saltroud=10;
            bcrypt.hash(password , saltroud , (err , hash_pass)=>{
                if(err){
                    throw new Error(JSON.stringify(err));
                }
    
                const data = user_model.create({
                    name:name,
                    email:email,
                    contact:contact,
                    password:hash_pass
                })
                res.status(201).JSON.stringify({newUser:data});
            })
        }catch(err){
            console.log(err);
        }  
    }

module.exports = {User};

