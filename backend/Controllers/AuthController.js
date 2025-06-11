const UserModel = require('../Models/User');
const bcrypt= require('bcrypt');
const signup = async (req,res) =>{
    try{
        const {name, email, password} = req.body;
        const user= await UserModel.findOne({email});
        if(user){
            return res.status(400).json({message: "Email already exists", success:false});
        }
        const userModel = new UserModel({ name, email, password });
        userModel.password= await bcrypt.hash(password, 10);
        await userModel.save();
        res.status(201).json({
            message: "Signup Success",
            success: true
        })
    }catch (err){
        res.status(500).json({
            message: "Internal Server Error",
            success: false
        })
    }
}

module.exports = {
    signup 
}