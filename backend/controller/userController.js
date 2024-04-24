const User = require('../model/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
// signup route handler

exports.signup = async (req, res) => {
    try {
      // get data
      const { name, email, password, role } = req.body;

      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({
          success: false,
          message: "User Already Exist",
        });
      }
      // hash the password
      let hashedPassword;
      try{
        hashedPassword = await bcrypt.hash(password, 10);
        
      }catch(err){
        console.log(err)
        return res.status(500).json({
          success:false,
          message: "Hashing failed"
        })
      }
      // create user entry
      const newUser = await User.create({
        name,
        email,
        password: hashedPassword,
        role,
      });
  
      return res.status(200).json({
        success: true,
        message: "User created successfully",
      });
    } catch (err) {
      console.error(err);
      return res.status(500).json({
        success: false,
        message: err.message,
      });
    }
};

// login route handler

exports.login = async (req, res) => {
    try {
      // get data
      const { email, password } = req.body;
  
      // check if user exists
      let user = await User.findOne({email});
      if(!user){
        return res.status(400).json({
          success:false,
          message:"User not found"
        })
      }
     
      const payload = {
        email: user.email,
        id: user._id,
        role: user.role,

      }
      if(await bcrypt.compare(password, user.password)){
        let token = jwt.sign(payload,process.env.SECRET_KEY,{
          expiresIn: '1h'
        });

        // provide the token to the user
        user = user.toObject();
        user.token = token;
        user.password = undefined;

        const options = {
          expires: new Date(Date.now() + 3*24*60*60*1000),
          httpOnly: true,
        };
        res.cookie("token", token,options).status(200).json({
          success:true,
          token,
          user,
          message:"user logged in successfully"
        })
        }
        else{
          return res.status(401).json({
            success:false,
            message: "Invalid Password"
          })
        }

      
    }
    catch(err){
      console.error(err);
      return res.status(500).json({
        success:false,
        message:"Something went wrong while logging in"
      })
    }
  };