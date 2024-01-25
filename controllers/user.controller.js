const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const connection = require("../config/query")
let q = ''

// login
// route POST /users/login
//Access private
const userLogin = asyncHandler(async(req, res) =>{
    res.status(200).json({"message": "login for users(student, lecturer,school staff)"})
})

// register  
// route POST /users/register
//Access public
const userRegister = asyncHandler(async(req, res) =>{
    res.status(200).json({"message": "register for users(student, lecturer,school staff)"})
})

// logout 
// route POST /users/logout
//Access private
const userLogout = asyncHandler(async(req, res) =>{
    res.status(200).json({"message": "logout for users(student, lecturer,school staff)"})
})

// all messages of events 
// route GET /messages
//Access private(need login first to see it)

const messages = asyncHandler(async(req, res) =>{
    
    q='SELECT * FROM messages'
    connection.query(q,(error,results) =>{
        if(error){
            res.status(400).json({messages: "data unavailable"})
        }
        res.status(200).json({message: results})
    })
})

const courses = asyncHandler(async(req, res) =>{
    
    q='SELECT * FROM classes'
    connection.query(q,(error,results) =>{
        if(error){
            res.status(400).json({messages: "data unavailable"})
        }
        res.status(200).json({message: results})
    })
})

const newCourse = asyncHandler(async (req,res) =>{
     q = "INSERT INTO classes (title,description) VALUES(?)"
    const {title,desc} = req.body
    if(!desc || !title){
        res.status(404).json({"message": "Please enter all required fields"})
    }

    const values = [title,desc]
    connection.query(q,[values], (err, result) =>{
        if(err){
            res.status(400).json({message: err.sqlMessage})
        }
        console.log(result)
        res.status(201).json({message: `new course '${title}' inserted successfully`})
    })
})

// login as a user 
// route GET /calendar
//Access private
//route non mandatory just for test
const calendar = asyncHandler(async(req, res) =>{
    res.status(200).json({"message": "calendar"})
})

const teachingSubject = asyncHandler(async(req, res) =>{
    q='SELECT teachers.name,teachers.surname from teachers INNER JOIN classes where teachers.teacher_id = classes.course_id'
    connection.query(q,(error,results) =>{
        if(error){
            res.status(400).json({messages: "data unavailable"})
        }
        res.status(200).json({message: results})
    })
})
//route not mandatory just for test
const contact = asyncHandler(async(req, res) =>{
    res.status(200).json({"message": "contact info"})
})
module.exports = {
    userLogin,
    userLogout,
    userRegister,
    messages,
    calendar,courses,newCourse,
    contact,teachingSubject
}