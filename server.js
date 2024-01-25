require("dotenv").config()

const express = require("express")
const path = require("path")
const app = express()
const logger = require("./middleware/logger")
const errorHandler = require("./middleware/errorHandler")
const cookieParser = require("cookie-parser")
const cors = require("cors")
const corsOptions = require("./config/corsOptions")
const connectDB = require("./config/dbConnect")
const { logEvents } = require("./middleware/logger")
const PORT = process.env.PORT || 3000

//middleware
// app.use(logger)
connectDB()
app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use(express.urlencoded({extended:true}))

//using the users route

app.use('/users', require("./routes/user.routes"))
//using admin routes
app.use("/admin", require("./routes/admin.routes"))
//using student routes
app.use("/student", require("./routes/student.routes"))
//using lecturer routes
app.use("/lecturer", require("./routes/lecturer.routes"))


//logging and handling all errors that can occur
app.use(errorHandler)

    app.listen(PORT, () =>{
        console.log(`Server running on port ${PORT}`)
    })


