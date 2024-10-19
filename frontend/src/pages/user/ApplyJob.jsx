import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const JobApplicationForm = () => {
  const location = useLocation();
  const { jobId, jobDetails } = location.state || {};
  const [formData, setFormData] = useState({
    resumeLink: "",
    coverLetter: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.resumeLink || !formData.coverLetter) {
      alert("All fields are required!");
      return;
    }
    try {
      const token = localStorage.getItem("token");

      const response = await axios.post(
        "http://localhost:3000/api/apply-jobs",
        {
          jobId,
          resumeLink: formData.resumeLink,
          coverLetter: formData.coverLetter,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      alert(response.data.message);
      setFormData({
        resumeLink: "",
        coverLetter: "",
      });
    } catch (err) {
      console.error("Error:", err.response ? err.response.data : err.message);
      alert(err?.response?.data?.message);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-3xl bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-3xl font-bold mb-2">Apply for Job</h2>
          {jobDetails && (
            <div className="mb-4">
              <h3 className="text-xl font-semibold">{jobDetails.title}</h3>
              <p className="text-gray-600">{jobDetails.description}</p>
              <p className="text-gray-500">Company: {jobDetails.company}</p>
              <p className="text-gray-500">Location: {jobDetails.location}</p>
              <p className="text-gray-500">
                Salary:{" "}
                {jobDetails.salary ? `$${jobDetails.salary}` : "Negotiable"}
              </p>
            </div>
          )}
        </div>

        <form onSubmit={handleSubmit} className="p-6">
          <div className="mb-4">
            <input
              type="hidden"
              id="jobId"
              name="jobId"
              value={jobId || ""}
              readOnly
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="coverLetter">
              Cover Letter
            </label>
            <textarea
              id="coverLetter"
              name="coverLetter"
              value={formData.coverLetter}
              onChange={handleChange}
              placeholder="Write your cover letter"
              className="w-full h-32 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
              required
            ></textarea>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-2" htmlFor="resumeLink">
              Resume Link
            </label>
            <input
              type="url"
              id="resumeLink"
              name="resumeLink"
              value={formData.resumeLink}
              onChange={handleChange}
              placeholder="Enter the link to your resume"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-900"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="bg-red-900 text-white px-6 py-2  rounded-md hover:bg-red-700 transition-colors duration-300"
            >
              Submit Application
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default JobApplicationForm;
