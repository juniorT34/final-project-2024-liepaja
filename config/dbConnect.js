const mysql = require("mysql")

const connectDB = async() =>{
    try{
        const connection = await mysql.createConnection({
            port: process.env.MYSQL_PORT,
            host: process.env.MYSQL_HOST,
            user: process.env.MYSQL_USER,
            password: process.env.MYSQL_PASSWORD,
            database: process.env.MYSQL_DATABASE_NAME
        })
        connection.connect(err =>{
            if(err){
                console.error(`Connection error: ${err.stack}`)
                return
            }
            //connection success
            console.log(`Connected Successfully To Mysql with connection id ${connection.threadId}`)
        })
    }catch(error){
        console.log(`Error: ${error.message}`)
    }
}

module.exports = connectDB