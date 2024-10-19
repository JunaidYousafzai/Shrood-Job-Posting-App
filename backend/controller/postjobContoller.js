const mongoose = require("mongoose");
const Job = require("../models/postJobsModel");

const createJob = async (request, response) => {
  const { title, description, company, location, salary } = request.body;
  const userId = request.user._id;
  try {
    if (!title || !description || !company || !location || !salary) {
      return response
        .status(201)
        .json({ message: `every field must be filled before posting job` });
    }
    const postJob = await Job.create({
      title,
      description,
      company,
      location,
      salary,
      user: userId,
    });
    await postJob.save();
    console.log("Job created:", postJob);
    return response
      .status(200)
      .json({ message: `Job posted successfully!`, job: postJob });
  } catch (err) {
    return response.status(500).json({ message: `Error to post job` });
  }
};

module.exports = createJob;
