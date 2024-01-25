const asyncHandler = require("express-async-handler")
const connection = require('../config/query')
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)
const jwt = require("jsonwebtoken")
let q = ''
const user = "lecturer"

const lecturerInfos = asyncHandler(async(req, res) =>{
    q = "SELECT * FROM teachers"
    connection.query(q,(err, data) =>{
        if(err){
            console.log(err.sqlMessagemessage)
            res.status(400).json({message: err.sqlMessage})
        }
        res.status(200).json({message: data})
    })
})


const lecturerRegister = asyncHandler(async(req, res) =>{
    
    const {name,surname,email,password,subject,country} = req.body
    if(!name || !surname || !email || !password || !subject || !country){
        res.status(404).json({"message": "Please enter all required fields"})
    }
    
    const hashed = await bcrypt.hashSync(password,salt)

    q = "INSERT INTO teachers (name, surname, email,password,subject, country) VALUES (?)"
    const values = [name,surname,email,hashed,subject,country]

    connection.query(q,[values], (err, result) =>{
        if(err){
            console.log(err)
            res.status(400).json({"message": err.message})
        }
        console.log(result)
    })
    res.status(201).json({message: `new teacher with name ${name} has been created`})

})


const lecturerLogin = asyncHandler(async(req, res) =>{
    const {email,password} = req.body
    // checking if the body is not empty
    if(!email || !password){
        res.status(400).json({message: "Incorrect or empty email or password"})
        if(!email){
            res.status(400).json({message: "Incorrect or empty email"})
        }else{
            res.status(400).json({message: "Incorrect or empty passowrd"})
        }
    }

    try{
        // connection to database
        q = "SELECT email,password FROM teachers WHERE email =  ? OR password = ?"
        connection.query(q, [email,password], async(err, results) =>{
            if(err){
                console.log(err)
                res.status(500).json({error: err.message})
            }

            // check if the user with given credentials exists
            if(results.length == 0){
                res.status(401).json({error: "Username or Password cannot be empty"})
            }
            // jwt
            // jwt token
            const token = jwt.sign({user},process.env.JSON_SECRET, {expiresIn: '1d'})
            res.cookie('token',token)
            // 
            const hashedPass = results[0].password
            // retrieve hashed password
            const match = await bcrypt.compareSync(password,hashedPass)
            if(match){
                res.status(200).json({message: "Login successful"})
            }else{
                res.status(500).json({error: "Internal server error"})
            }

        })
    }catch(error){
        console.log(`Error executing query ${error}`)
        res.status(500).json({error: "Internal server error"})
    }
})




const lecturerLogout = asyncHandler(async(req, res) =>{
    res.clearCookie('token')
    res.status(200).json({ message: "logout successfully" })
})
const lecturerProfile = asyncHandler(async(req, res) =>{
    res.status(200).json({"message" : "update a lecturer"})
})

const lecturerDelete = asyncHandler(async (req, res) =>{
    res.status(200).json({"messag" : "delete a lecturer"})
})
module.exports = {
    lecturerInfos,
    lecturerLogin,
    lecturerLogout,
    lecturerProfile,
    lecturerRegister,
    lecturerDelete
}