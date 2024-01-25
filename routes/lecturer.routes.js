const express = require("express")
const { lecturerInfos, lecturerLogin, lecturerRegister, lecturerLogout, lecturerProfile, lecturerDelete } = require("../controllers/lecturer.controller")
const router = express.Router()

router.get("/infos", lecturerInfos)
    .post("/register", lecturerRegister)
    .post("/login", lecturerLogin)
    .post("/logout", lecturerLogout)
    .put("/profile/:id", lecturerProfile)
    .delete("/:id", lecturerDelete)

module.exports = router