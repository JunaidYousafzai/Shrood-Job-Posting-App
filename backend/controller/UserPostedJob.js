const Job = require("../models/postJobsModel");

const userPostedJob = async (request, response) => {
  const userId = request.user._id;

  console.log('User ID:', userId); 

  try {
    const userPostedJob = await Job.find({ user: userId });

    console.log('Posted Jobs:', userPostedJob); 

    return response.status(200).json(userPostedJob);
  } catch (err) {
    console.error(err); 
    response
      .status(500)
      .json({ message: `Error while getting your posted job: ${err.message}` });
  }
};

module.exports = userPostedJob;