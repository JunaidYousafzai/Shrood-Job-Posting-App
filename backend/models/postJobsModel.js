const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  title: { type: String, required: [true, "Name of the Job required!"] },
  description: {
    type: String,
    required: [true, "Description for the job required!"],
  },
  company: {
    type: String,
    required: [true, "Company name is required!"],
  },
  location: {
    type: String,
    required: [true, "Location is required!"],
  },
  salary: { type: Number },
  datePosted: { type: Date, default: Date.now },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
