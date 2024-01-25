const express = require("express")
const router = express.Router()
const { userLogin,
    userLogout,
    userRegister,
    messages,
    calendar,
    contact, 
    newCourse,
    courses,
    teachingSubject} = require("../controllers/user.controller")

router
    .get("/courses", courses)
    .get("/teaching", teachingSubject)
    .get("/messages", messages)
    .post("/newCourse", newCourse)

module.exports = router