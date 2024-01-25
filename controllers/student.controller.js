const asyncHandler = require("express-async-handler")
const connection = require("../config/query")
const bcrypt = require("bcrypt")
const user = "student"
const jwt = require("jsonwebtoken")

const salt = bcrypt.genSaltSync(10)

// get all informations related to all students
const studentInfos = asyncHandler(async(req, res) =>{
    const q = "SELECT * FROM students"
    connection.query(q,(err, data) =>{
        if(err){
            res.status(400).json({message: err.sqlMessage})
        }
        res.status(200).json({message: data})
    })
})

//register a student
const studentRegister = asyncHandler(async(req, res) =>{
    const q = "INSERT INTO students (name,surname,email,password,faculty) VALUES(?)"
    const {name,surname,email ,password,faculty} = req.body
    if(!email || !name || !surname || !password || !faculty){
        res.status(404).json({"message": "Please enter all required fields"})
    }
    const hashed = await bcrypt.hashSync(password,salt)
    const values = [name,surname,email, hashed,faculty]
    connection.query(q,[values], (err, result) =>{
        if(err){
            res.status(400).json({message: err})
        }
        console.log(result)
        res.status(201).json({message: `student with name ${name} inserted successfully`})
    })
    
})

const studentLogin = asyncHandler(async(req, res) =>{
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
        q = "SELECT email,password FROM students WHERE email =  ? OR password = ?"
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

const studentLogout = asyncHandler(async(req, res) =>{
    res.clearCookie('token')
    res.status(200).json({ message: "logout successfully" })
})

const studentProfile = asyncHandler(async(req, res) =>{
    res.status(200).json({"message" : "update a student"})
})

const studentDelete = asyncHandler(async (req, res) =>{
    res.status(200).json({"message" : "delete a student"})
})

module.exports = {
    studentInfos,
    studentLogin,
    studentLogout,
    studentProfile,
    studentRegister,
    studentDelete
}