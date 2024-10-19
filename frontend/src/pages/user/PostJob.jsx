import React, { useState } from "react";
import axios from "axios";
import { useAuthentication } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useUserJobs } from "../../context/JobContext";
import Layout from "../../components/Layout";

const JobPost = () => {
  const { user } = useAuthentication();
  const navigate = useNavigate();
  const { userpostedJobs, setUserPostedJobs } = useUserJobs();
  const [jobData, setJobData] = useState({
    title: "",
    description: "",
    company: "",
    location: "",
    salary: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setJobData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:3000/api/post-job",
        {
          title: jobData.title,
          description: jobData.description,
          company: jobData.company,
          location: jobData.location,
          salary: jobData.salary,
          user: user._id,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      setJobData({
        title: "",
        description: "",
        company: "",
        location: "",
        salary: "",
      });
      alert("job Posted Successfully!");
      navigate("/jobs");
      console.log(jobData);
    } catch (err) {
      alert("Error Posing Job!", err.message);
    }
  };

  return (
    <Layout>
   
    <div className="container mx-auto   p-6 w-1/2 my-10  rounded-lg shadow">
      <h1 className="text-3xl font-bold mb-4 text-center">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block ">Job Title</label>
          <input
            type="text"
            name="title"
            value={jobData.title}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
          />
        </div>
        <div>
          <label className="block">Description</label>
          <textarea
            name="description"
            value={jobData.description}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
            rows="4"
          />
        </div>
        <div>
          <label className="block ">Company</label>
          <input
            type="text"
            name="company"
            value={jobData.company}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md"
          />
        </div>
        <div>
          <label className="block ">Location</label>
          <input
            type="text"
            name="location"
            value={jobData.location}
            onChange={handleChange}
            required
            className="mt-1 block w-full p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
          />
        </div>
        <div>
          <label className="block ">Salary</label>
          <input
            type="number"
            name="salary"
            value={jobData.salary}
            onChange={handleChange}
            className="mt-1 block w-full p-2   focus:outline-none focus:ring-2 focus:ring-red-900"
          />
        </div>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-red-900 text-white rounded-md hover:bg-red-800 transition duration-300"
        >
          Post Job
        </button>
      </form>
    </div>
    </Layout>
  );
};

export default JobPost;
