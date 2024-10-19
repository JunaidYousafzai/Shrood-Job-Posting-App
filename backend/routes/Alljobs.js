const getAllJobs = require("../controller/AllJobsController");
const express = require("express")
const router = express.Router()



router.get("/",getAllJobs)


module.exports = router


