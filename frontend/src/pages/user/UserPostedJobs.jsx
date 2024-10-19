import React, { useEffect } from "react";
import { useUserJobs } from "../../context/JobContext";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";

const UserPostedJobs = () => {
  const { userpostedJobs, PostedJobs } = useUserJobs();
  useEffect(() => {
    PostedJobs();
  }, []);
  const navigate = useNavigate();

  const handleViewApplicants = (jobId) => {
    navigate(`/job-applicants/${jobId}`);
  };

  return (
    <Layout>
      <div className="container mx-auto my-8 px-4 animate-slide-up">
        <h1 className="text-3xl font-bold mb-6 text-center">
          Your Posted Jobs
        </h1>
        {userpostedJobs && userpostedJobs.length > 0 ? (
          <div className="space-y-4">
            {userpostedJobs.map((job, index) => (
              <div
                key={index}
                className="flex justify-between items-center border-b border-gray-300 pb-4"
              >
                <div className="flex-1">
                  <h2 className="text-xl font-semibold ">{job.title}</h2>
                  <p className="">
                    <span className="font-semibold">Company:</span>{" "}
                    {job.company}
                  </p>
                  <p className="">
                    <span className="font-semibold">Location:</span>{" "}
                    {job.location}
                  </p>
                  <p className=" mb-1">
                    <span className="font-semibold">Posted on:</span>{" "}
                    {new Date(job.createdAt).toLocaleDateString()}
                  </p>
                  <p className="">{job.description}</p>
                </div>

                <div className="flex-0">
                  <button
                    onClick={() => handleViewApplicants(job._id)}
                    className="bg-red-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    View Applicants
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-gray-600 text-center">
            You have not posted any jobs yet.
          </p>
        )}
      </div>
    </Layout>
  );
};

export default UserPostedJobs;
