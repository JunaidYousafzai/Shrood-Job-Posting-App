
const ApplyForJob = require("../models/applyJobModel");
const Job = require("../models/postJobsModel");
const User = require("../models/registerModel");

const Applicant = async (request, response) => {
  const { jobId, coverLetter, resumeLink } = request.body;
  const userId = request.user._id; // Ensure the request.user is correctly populated by the auth middleware

  if (!jobId || !coverLetter || !resumeLink) {
    return response.status(400).json({ message: "All fields are required!" });
  }

  try {

    const job = await Job.findById(jobId);
    if (!job) {
      return response.status(404).json({ message: "Job not found!" });
    }


    const alreadyApplied = await ApplyForJob.findOne({ job: jobId, user: userId });
    if (alreadyApplied) {
      return response.status(400).json({ message: "You have already applied for this job!" });
    }


    const user = await User.findById(userId);
    if (!user) {
      return response.status(404).json({ message: "User not found!" });
    }


    const application = new ApplyForJob({
      job: jobId,
      user: userId,
      coverLetter,
      resume: resumeLink,
    });

    await application.save();

    return response.status(201).json({ message: "Application submitted successfully!", application });
  } catch (error) {
    console.error("Error applying for job:", error);
    return response.status(500).json({ message: "Internal server error", error: error.message });
  }
};

module.exports = Applicant;
