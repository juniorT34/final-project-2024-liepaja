const express = require("express")
const { adminLogin, adminLogout, adminGetAllUsers, adminCreateNewStudent,adminManage, adminRegister, adminCreateNewTeacher, adminUpdateTeacher, adminUpdateStudent, adminDeleteStudent, adminDeleteTeacher } = require("../controllers/admin.controller")
const router = express.Router()


router
    .get('/',adminManage)
    .post("/login", adminLogin)
    .post("/register",adminRegister)//temp
    .post("/logout", adminLogout)
    .get("/users",adminGetAllUsers)
    .post("/newStudent",adminCreateNewStudent)
    .post("/newTeacher",adminCreateNewTeacher)
    .patch("/teacher/:id",adminUpdateTeacher)
    .patch("/student/:id",adminUpdateStudent)
    .delete("/student/:id",adminDeleteStudent)
    .delete("/teacher/:id",adminDeleteTeacher)



module.exports = router

// /admin/login
// /admin/logout
// /admin/dashboard show all the users and their roles
// /admin/users get post put delete 