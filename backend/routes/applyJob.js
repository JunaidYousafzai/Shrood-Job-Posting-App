const authMiddleware = require("../middlewares/authMiddleware");
const express = require("express");

const Applicant = require("../controller/Applicant");

const router = express.Router()

router.post("/",authMiddleware,Applicant)


module.exports = router