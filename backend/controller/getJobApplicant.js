const ApplyForJobModel = require("../models/applyJobModel"); 
const Job = require("../models/postJobsModel"); 

const getApplicantsForJob = async (request, response) => {
  const { jobId } = request.params; 
  try {

    const applicants = await ApplyForJobModel.find({ job: jobId })
      .populate("user", "name email") 
      .exec();

    if (!applicants.length) {
      return response.status(404).json({ message: "No applicants found for this job." });
    }

    return response.status(200).json(applicants);
  } catch (err) {
    console.error("Error fetching applicants:", err);
    return response.status(500).json({ message: "Internal server error", error: err.message });
  }
};


const deleteJob = async (request, response) => {
  const { jobId } = request.params;

  try {
    const deletedJob = await Job.findByIdAndDelete(jobId);

    if (!deletedJob) {
      return response.status(404).json({ message: "Job not found." });
    }

    return response.status(200).json({ message: "Job deleted successfully." });
  } catch (err) {
    console.error("Error deleting job:", err);
    return response.status(500).json({ message: "Internal server error", error: err.message });
  }
};

module.exports = {
  getApplicantsForJob,
  deleteJob
};
