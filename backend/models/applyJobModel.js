const mongoose = require("mongoose");

const ApplyForJobSchema = new mongoose.Schema({
  job: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job",
    required: [true, "Job ID is required!"],
  },
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: [true, "User ID is required!"],
  },
  coverLetter: {
    type: String,
    required: [true, "Cover letter is required!"],
  },
  resume: {
    type: String,
    required: [true, "Resume is required!"],
  },
  dateApplied: { type: Date, default: Date.now },
});

const ApplyForJob = mongoose.model("ApplyForJob", ApplyForJobSchema);

module.exports = ApplyForJob;
