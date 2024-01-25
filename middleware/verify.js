const jwt = require("jsonwebtoken")
const verify = (req,res, next) =>{
    const token = req.cookies.token
    if(!token){
        return res.json({message: "Make sure to be admin to keep on"})
    }else{
        jwt.verify(token, process.env.JSON_SECRET, (err, decoded) =>{
            if(err){
                return res.json({message: "Authentication error"})
            }else{
                req.user = decoded.user
                next()
            }
        })
    }
}

module.exports = verify