
const Job = require("../models/postJobsModel");

const getAllJobs = async (request, response) => {
  const userId = request.query.userId; 

  try {
    let allJobs;

  
    if (userId) {
      allJobs = await Job.find({ user: { $ne: userId } }); 
    } else {
      allJobs = await Job.find(); 
    }
    
    if (allJobs.length === 0) {
      return response.status(200).json({ message: `No jobs available!` });
    }

    response.status(200).json(allJobs); 
  } catch (err) {
    response.status(500).json({ message: `Error getting jobs: ${err.message}` });
  }
};

module.exports = getAllJobs;
