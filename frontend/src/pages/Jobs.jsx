  import React, { useEffect, useState } from "react";
  import axios from "axios";
  import { NavLink, useNavigate } from "react-router-dom";
  import { useAuthentication } from "../context/AuthContext";
  import Layout from "../components/Layout";

  const Jobs = () => {
    const [allJobs, setAllJobs] = useState([]);
    const [searchJob, setSeachJob] = useState("");
    const { user } = useAuthentication();
    let { profile } = useAuthentication();
    const navigate = useNavigate();

    let userId = profile?._id;



    useEffect(() => {
      const fetchJobs = async () => {
        try {

          const apiUrl = userId
          ? `http://localhost:3000/api/all-jobs?userId=${userId}`
          : `http://localhost:3000/api/all-jobs`;

          const response = await axios.get(apiUrl);

          if (response.data) {
            setAllJobs(response.data);
          }
        } catch (error) {
          console.error("Error fetching jobs:", error);
        }
      };

      fetchJobs();
    }, [userId, user]);

    const filterJob = allJobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchJob.toLowerCase()) ||
        job.company.toLowerCase().includes(searchJob.toLowerCase())
    );

    const handleApply = (job) => {
      console.log("applying job ", job);
      navigate("/apply-job", { state: { jobId: job._id, jobDetails: job } });
    };

    return (
      <Layout>
        <div className="container mx-auto my-10 p-5 animate-slide-up">
          <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
            Available Jobs
          </h1>

          <div className="flex justify-center w-full max-w-md mx-auto p-4">
            <input
              type="search"
              className="input input-bordered w-full"
              placeholder="Search Jobs"
              value={searchJob}
              onChange={(e) => setSeachJob(e.target.value)}
            />
          </div>

          {filterJob.length > 0 ? (
            <div className="flex flex-col gap-4">
              {filterJob.map((job) => (
                <div
                  key={job._id}
                  className="bg-base-100 shadow-md rounded-lg p-4 flex justify-between items-center"
                >
                  <div className="flex-1">
                    <h2 className="text-xl font-bold  mb-1">{job.title}</h2>
                    <p className="text-sm  mb-1">{job.company}</p>
                    <p className="text-gray-800 mb-2">
                      {job.description.length > 100
                        ? `${job.description.substring(0, 100)}...`
                        : job.description}
                    </p>
                    <p className="text-sm text-gray-500 mb-1">
                      <span className="font-semibold">Location:</span>{" "}
                      {job.location}
                    </p>
                    <p className="text-sm ">
                      <span className="font-semibold">Posted:</span>{" "}
                      {new Date(job.datePosted).toLocaleDateString()}
                    </p>
                  </div>
                  <div>
                    <button
                      onClick={() => handleApply(job)}
                      className="btn btn-success"
                    >
                      View Details
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="alert alert-warning mt-4">
              <span>No jobs found. Please try a different search.</span>
            </div>
          )}
        </div>
      </Layout>
    );
  };

  export default Jobs;
