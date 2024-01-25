const asyncHandler = require("express-async-handler")
const bcrypt = require("bcrypt")
const salt = bcrypt.genSaltSync(10)
const connection = require("../config/query")
const jwt = require("jsonwebtoken")
const verify = require("../middleware/verify")
const user = "admin"
let q = ""


// login as admin
// route POST /admin/login
//Access private
const adminLogin = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    //checking if the body is not empty
    if (!email || !password) {
        res.status(400).json({ message: "Incorrect or empty username or password" })
        if (!email) {
            res.status(400).json({ message: "Incorrect or empty username" })
        } else {
            res.status(400).json({ message: "Incorrect or empty password" })
        }
    }
    try {
        //connection to database

        q = "SELECT email, password FROM administrator WHERE email = ? OR password = ?"

        connection.query(q, [email, password], async (err, results) => {
            if (err) {
            console.log(err)

                res.status(500).json({ error: err.message })
            }
            //check if the user with given credentials exists

            // console.log(results[0].password)
            if (results.length == 0) {
                res.status(401).json({ error: "Username or Password cannot be empty" })

            }
            // jwt token
            const token = jwt.sign({user},process.env.JSON_SECRET, {expiresIn: '1d'})
            res.cookie('token',token)
            // end of jwt token
            const hashedPass = results[0].password
            //retrieve hashed password
            const match = await bcrypt.compareSync(password, hashedPass)
            if (match) {
                res.status(200).json({ message: "Login successful", user: user })
            } else {
                res.status(401).json({ error: "Invalid username or password" })
            }

        })
    } catch (error) {
        console.error(`Error executing query ${error}`)
        res.status(500).json({ error: "Internal server error" })
    }

    //after the login is successful we redirect the user to the home page(dashboard)
    // res.redirect('/')

})

const adminManage = asyncHandler(verify,async (req, res) => {
    // check if the token is passed by
    return res.json({message: "Success", user: req.name})
    
})


// logout as admin 
// route POST /admin/logout
//Access private
const adminLogout = asyncHandler(async (req, res) => {
    res.clearCookie('token')
    res.status(200).json({ message: "logout successfully" })
})

// get all users 
// route GET /admin/users
//Access private
const adminGetAllUsers = asyncHandler(async (req, res) => {
    //query to be formatted to select only username email and roles
    q = "SELECT username,email,role FROM users"
    connection.query(q, (err, results) => {
        if (err) {
            console.log(`Error executing query ${err}`)
            res.status(500).json({ error: "Internal server error" })
        }
        res.status(200).json({ message: results })
    })
})

// create a new user as admin 
// route POST /admin/users
//Access private
const adminCreateNewStudent = asyncHandler(async (req, res) => {
    //to be modified to take name,surname instead of username
    const { name,surname, email, password, faculty } = req.body
    if (!name || !surname || !email || !password || !faculty) {
        res.status(400).json({ error: "All fields are required" })
    }
    //hash the password
    const hashedPass = await bcrypt.hashSync(password, salt)
    //execute query
    try {

        q = "INSERT INTO students (name,surname,email, password,faculty) VALUES (?)"
        const values = [name,surname, email, hashedPass, faculty]
        connection.query(q, [values], (err, results) => {
            if (err) {
                console.error(`Error executing query ${err}`)
                res.status(500).json({ error: "Internal server error" })
            }
            console.log(results)
            res.status(200).json({ message: results })
        })
    } catch (error) {
        console.error(`Error executing query ${error}`)
        res.status(500).json({ error: "Internal server error" })
    }
})

const adminCreateNewTeacher = asyncHandler(async (req, res) => {
    //to be modified to take name,surname instead of username
    const { name,surname, email, password, subject, country } = req.body
    if (!name || !surname || !email || !password || !subject || !country) {
        res.status(400).json({ error: "All fields are required" })
    }
    //hash the password
    const hashedPass = await bcrypt.hashSync(password, salt)
    //execute query
    try {

        q = "INSERT INTO teachers (name,surname,email, password,subject,country) VALUES (?)"
        const values = [name,surname, email, hashedPass, subject, country]
        connection.query(q, [values], (err, results) => {
            if (err) {
                console.error(`Error executing query ${err}`)
                res.status(500).json({ error: "Internal server error" })
            }
            console.log(results)
            res.status(200).json({ message: results })
        })
    } catch (error) {
        console.error(`Error executing query ${error}`)
        res.status(500).json({ error: "Internal server error" })
    }
})
// modify existing user as admin 
// route PATCH /admin/users
//Access private

// delete existing user as admin 
// route DELETE /admin/users
//Access private
const adminDeleteStudent = asyncHandler(async(req, res) =>{
    const id = req.params.id
    q = "DELETE FROM students WHERE id = ?"
    if (!id) {
        res.status(401).json({ error: `User with id ${id} does not exist` })
    }
    connection.query(q, [id], (err, results) => {
        if (err) {
            console.error(`Error executing query ${err}`)
            res.status(500).json({ error: "Internal server error" })
        }
        console.log(results)
        res.status(200).json({ message: `Student with ${id} has been deleted successfully` })
    })

})

const adminUpdateStudent = asyncHandler(async(req,res) =>{
    const { name,surname, email, faculty } = req.body
    const id = parseInt(req.params.id)

    if (!name || surname || !email || !faculty) {
        res.status(400).json({ error: "All fields are required" })
    }
    // console.log(req.params.id) gives back the id that has been passed as parameter 
    // in the url
    if (!id) {
        res.status(401).json({ error: `User with id ${id} does not exist` })
    }

    try {

        q = "UPDATE students SET name = ?,surname = ?, email = ?, faculty = ? WHERE id = ?"
        connection.query(q, [username, email, role, id], (err, results) => {
            if (err) {
                console.error(`Error executing query ${err}`)
                res.status(500).json({ error: "Internal server error" })
            }
            res.status(200).json({ message: `User with id ${id} has been altered successfully` })

        })

    } catch (error) {
        console.error(`Error executing query : ${error}`)
        res.status(500).json({ error: "Internal server error" })
    }

})

const adminUpdateTeacher = asyncHandler(async(req,res) =>{
    const { name,surname, email, subject, country } = req.body
    const id = parseInt(req.params.id)

    if (!name || surname || !email || subject || !country) {
        res.status(400).json({ error: "All fields are required" })
    }
    // console.log(req.params.id) gives back the id that has been passed as parameter 
    // in the url
    if (!id) {
        res.status(401).json({ error: `teacher with id ${id} does not exist` })
    }

    try {

        q = "UPDATE teachers SET name = ?,surname = ?, email = ?, subject = ?, country = ? WHERE id = ?"
        connection.query(q, [username, email, role, id], (err, results) => {
            if (err) {
                console.error(`Error executing query ${err}`)
                res.status(500).json({ error: "Internal server error" })
            }
            res.status(200).json({ message: `teacher with id ${id} has been altered successfully` })

        })

    } catch (error) {
        console.error(`Error executing query : ${error}`)
        res.status(500).json({ error: "Internal server error" })
    }

})


const adminDeleteTeacher = asyncHandler(async(req, res) =>{
    const id = req.params.id
    q = "DELETE FROM teachers WHERE id = ?"
    if (!id) {
        res.status(401).json({ error: `User with id ${id} does not exist` })
    }
    connection.query(q, [id], (err, results) => {
        if (err) {
            console.error(`Error executing query ${err}`)
            res.status(500).json({ error: "Internal server error" })
        }
        console.log(results)
        res.status(200).json({ message: `User with ${id} has been deleted successfully` })
    })
})

//temporary just to create a crypted admin password
const adminRegister = asyncHandler(async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) {
        res.status(400).json({ message: "Incorrect username or password" })
        if (!email) {
            res.status(400).json({ message: "Incorrect username" })
        } else {
            res.status(400).json({ message: "Incorrect password" })
        }
    }
    //encrypting password with bcrypt
    const hashed = await bcrypt.hashSync(password, salt)

    //query to the database
    q = "INSERT INTO administrator (email, password) VALUES (?)"
    const values = [email, hashed]
    connection.query(q, [values], (err, result) => {
        if (err) {
        console.log(err)
            res.status(400).json({ error: err.message })
        }
        console.log(result)
        // return 
    })
    res.status(201).json({ message: `new admin user ${email} has been created` })


})

module.exports = { adminRegister, adminLogin, adminLogout, adminManage, adminGetAllUsers, adminCreateNewStudent,adminCreateNewTeacher,adminDeleteStudent,adminUpdateStudent,adminDeleteTeacher,adminUpdateTeacher }