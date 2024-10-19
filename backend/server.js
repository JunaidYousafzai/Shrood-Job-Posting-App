const express = require("express")
const errorHanler = require("./middlewares/errorHandler")
const router = require("./routes/auth")
const connectDB = require("./config/db")
const app = express()
const dotenv = require("dotenv").config()
const PORT = process.env.PORT
const bcrypt = require('bcrypt');
const cors = require("cors")
// Middleware
app.use(express.json())
app.use(cors())

// DataBase connected 
connectDB()
// Router

app.use("/api/auth",require("./routes/auth")) //That is auth router 

app.use("/api",require("./routes/postJob")) //That router is related to jobs
app.use("/api/apply-jobs",require("./routes/applyJob"))   //That router is related to apply for a job but with login

app.use("/api/all-jobs", require("./routes/Alljobs")); //That is the route to get all jobs but It's not required authenticaiotn

app.use("/api/job-applicants",require("./routes/getJobApplicant"))
app.use("/api/delete-job", require("./routes/getJobApplicant"));


app.use(errorHanler)
app.listen(PORT,()=>console.log(`Server is running at port : ${PORT}`))
