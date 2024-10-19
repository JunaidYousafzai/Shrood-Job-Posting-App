import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useAuthentication } from "../../context/AuthContext";
import Layout from "../../components/Layout";

const JobApplicants = () => {
  const { jobId } = useParams();
  const [applicants, setApplicants] = useState([]);
  const { user } = useAuthentication();
  const navigate = useNavigate()
  console.log(user, "user");

  const fetchApplicants = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/job-applicants/${jobId}`,
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      console.log(response.data);
      setApplicants(response.data);
    } catch (err) {
      console.log(err.response ? err.response.data.message : err.message)
    }
  };

  useEffect(() => {
    fetchApplicants();
  }, [jobId]);

  const deleteJob = async () => {

    const confirmed = window.confirm("Are you sure you want to delete this job?");
    if (!confirmed) {
      return; 
    }

    try {
      await axios.delete(`http://localhost:3000/api/delete-job/${jobId}`, {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
      alert("Job deleted successfully.");
      navigate("/jobs")
    } catch (err) {
      alert(err.response ? err.response.data.message : err.message);
      console.log(err)
    }
  };
  return (

    <Layout>
      <div className="container mx-auto my-8 px-4">
        <h1 className="text-3xl font-bold mb-6 text-center">Job Applicants</h1>
        <div className="space-y-4">
          {applicants.length === 0 ? (
            <h1
            className="text-center text-[3vw]"
            >No applicants have applied for this job</h1>
          ) : (
            applicants.map((applicant, index) => (
              <div
                key={index}
                className="p-4 border rounded-lg shadow-md "
              >
                <h2 className="text-xl font-semibold ">
                  {applicant.user.name}
                </h2>
                <p className="">
                  <span className="font-semibold">Email:</span>{" "}
                  {applicant.user.email}
                </p>
                <p className=" mb-1">
                  <span className="font-semibold">Cover Letter:</span>{" "}
                  {applicant.coverLetter}
                </p>
                <a
                  href={applicant.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" underline"
                >
                  View Resume
                </a>
              </div>
            ))
          )}
        </div>

        <div className="flex justify-center mt-6">
          <button
            onClick={deleteJob}
            className=" bg-red-950 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete Job
          </button>
        </div>
      </div>
   
    </Layout>
  );
};

export default JobApplicants;
