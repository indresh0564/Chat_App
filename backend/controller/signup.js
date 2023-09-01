const { json } = require('body-parser');
const user_model = require('../models/user');
const bcrypt = require('bcrypt');

const User = async(req, res)=>{
        try{
            const {name , email, contact , password } = req.body;

           const data = await user_model.findOne({where:{email:email}})
            if(data){
                res.status(201).json({message:" this user already exist "});
            }else{
                const saltroud=10;
                bcrypt.hash(password , saltroud , async(err , hash_pass)=>{
                    if(err){
                        throw new Error(JSON.stringify(err));
                    }
        
                    await user_model.create({
                        name:name,
                        email:email,
                        contact:contact,
                        password:hash_pass
                    })
                    .then((data)=>{
                        res.status(200).json({message:"Succesfully Resister", newUser:data});
                    })
                    .catch((err)=>{
                        console.log(err);
                        throw new Error(JSON.stringify(err));
                    })
                }) 
            }           
            
            
        }catch(err){
            console.log(err);
        }  
    }

module.exports = {User};

