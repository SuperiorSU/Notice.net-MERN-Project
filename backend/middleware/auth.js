// creating middlewares

const jwt = require("jsonwebtoken");
require("dotenv").config();

// we pass next as third parameter so that it might tranfer the control to the next middleware or create a chain of middlewares to be executed.
exports.auth = (req,res,next) =>{
    try{
        // check if token is there or not
        // the best way to send the token is in the headers. But we can also send the token in the body or in the cookies. We can send the token in the body using the following method
        console.log("req.body.token = ",req.body.token);
        console.log("req.cookies.token = ",req.cookies);
        // console.log("req.header = ",req.header("Authorization"));
        const token = req.body.token || req.cookies.token || req.header("Authorization").replace("Bearer ",""); 

        // we are replacing "Bearer " (with space) with a blank string so that only token is the resultant 

        if(!token){
            return res.status(401).json({
                success: false,
                message: "Token not found"
            });
        }

        // verify the token
        try{
            // to verify, we use the verify method of jwt which takes two parameters, token and secret key
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            console.log(decoded);
            
            // if token is verified, we set the user in the request object. We store the user in the decoded object so that we can verify the user in the next middleware
            req.user = decoded;
            next();
        }
        catch(err){
            return res.status(401).json({
                success:false,
                message:"Invalid token"
            });
        }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Something is wrong with the code"
        })
    }
}
exports.isStudent = (req,res,next)=>{
    try{
        // we stored the decoded in user object so that we can check the roles and authenticate the user. Below we check the role of the user and if it is not student, we return an error. The decoded is a payload which we passed while creating the token.
        if(req.user.role!=="student"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for student only"
            });
        }
        next()
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Something is not right-student."
        })
    }
}
exports.isTeacher = (req,res,next)=>{
    try{
        // we stored the decoded in user object so that we can check the roles and authenticate the user. Below we check the role of the user and if it is not student, we return an error. The decoded is a payload which we passed while creating the token.
        if(req.user.role!=="co-ordinator"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for co-ordinator only"
            });
        }
        next()
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Something is not right. User role is not matching."
        })
    }
}

exports.isAdmin=(req,res,next)=>{
    try{
        if(req.user.role!=="admin"){
            return res.status(401).json({
                success:false,
                message:"This is a protected route for admin only"
            });
        }
    }
    catch(err){
        return res.status(500).json({
            success:false,
            message:"Something is not right. User role is not matching."
        })
    }
}

// there is a cookie parser too that we use in the index.js file