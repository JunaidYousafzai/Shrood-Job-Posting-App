const express = require("express")
const router = express.Router()
const authMiddleware = require("../middlewares/authMiddleware");

const {deleteJob} = require("../controller/getJobApplicant")
const {getApplicantsForJob} = require("../controller/getJobApplicant")


router.get("/:jobId",authMiddleware,getApplicantsForJob)

router.delete("/:jobId",authMiddleware,deleteJob);
module.exports = router