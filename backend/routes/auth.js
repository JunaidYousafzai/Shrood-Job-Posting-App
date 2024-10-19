const express = require("express")
const router = express.Router()
const{registerUser,
    loginUser,
    profile
    } = require("../controller/authController")
const authMiddleware = require("../middlewares/authMiddleware")
const updateProfile = require("../controller/updateProfile")
    
router.post("/register",registerUser)
router.post("/login",loginUser)


// Private Route means you can go after logging in

router.get("/profile", authMiddleware, profile);
router.put("/profile", authMiddleware, updateProfile);

module.exports = router
