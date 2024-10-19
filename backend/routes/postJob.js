const createJob = require("../controller/postjobContoller");
const userPostedJob = require("../controller/UserPostedJob");
const authMiddleware = require("../middlewares/authMiddleware");
const express = require("express")
const router = express.Router()


router.post("/post-job",authMiddleware,createJob)
router.get("/my-jobs",authMiddleware,userPostedJob)


module.exports = router