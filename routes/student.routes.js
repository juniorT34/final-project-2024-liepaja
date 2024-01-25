const express = require("express")
const {studentInfos,studentLogin,studentLogout,studentProfile,studentDelete, studentRegister} = require("../controllers/student.controller")

const router = express.Router()

router.get("/infos",studentInfos)
    .post("/register",studentRegister)
    .post("/login",studentLogin)
    .post("/logout",studentLogout)
    .put("/profile/:id", studentProfile)
    .delete("/:id",studentDelete)

module.exports = router