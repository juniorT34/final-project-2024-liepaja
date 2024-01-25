// corsOptions function is from the documentation
//and it allows us to check what url can be accepted by our service


const allowedOrigins = require("./allowedOrigins")

const corsOptions = {
    origin: (origin,callback) =>{
        if(allowedOrigins.indexOf(origin) !== -1 || !origin){
            callback(null, true)
        }else{
            callback(new Error("Not allowed by CORS"))
        }
    },
    credentials: true,
    optionSuccessStatus: 200
}

module.exports = corsOptions