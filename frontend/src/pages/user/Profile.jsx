import React, { useEffect, useState } from "react";
import { useAuthentication } from "../../context/AuthContext";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import { FaEdit } from "react-icons/fa";
import Layout from "../../components/Layout";

const Profile = () => {
  const { profile, setUser } = useAuthentication();
  console.log(profile)
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: "",
    address: "",
    profilePhoto: "",
  });
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    if (profile) {
      setFormData({
        username: profile.username,
        address: profile.address,
        profilePhoto: profile.profilePhoto,
      });
    }
  }, [profile]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.put(
        "http://localhost:3000/api/auth/profile",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      alert(response.data.message);
      setIsEditing(false);
    } catch (error) {
      console.error("Error updating profile:", error);
      alert(error.response.data.message || "Error updating profile");
    }
  };

  const logOut = () => {
    localStorage.removeItem("name");
    localStorage.removeItem("email");
    localStorage.removeItem("token");
    setUser({ username: null, email: null, token: null });
    navigate("/");
  };

  return (
    <Layout>

    <div className="flex justify-center items-start py-10 animate-slide-up">
      <div className="max-w-md w-full mx-auto rounded-lg shadow-md  overflow-hidden">
        <img
          className="w-full h-48 object-cover"
          src={formData.profilePhoto || "https://via.placeholder.com/200"}
          alt={`${formData.username}'s profile`}
        />
        <div className="p-6">
          <h2 className="text-2xl font-bold  text-center mb-2">
            {formData.username}
            <button
              onClick={() => setIsEditing(true)}
              className="ml-2 text-gray-600"
            >
              <FaEdit />
            </button>
          </h2>
          <p className=" text-center mb-1">
            <strong>Contact:</strong> {profile?.contact}{" "}

          </p>
          <p className=" text-center mb-4">
            <strong>Email:</strong> {profile?.email} {/* Displaying email */}
          </p>
          <p className=" text-center mb-4">
            <strong>Address:</strong> {formData?.address}
          </p>
          {!isEditing ? (
            <>

              <p className="text-gray-700 text-center mb-4">
                <strong>Profile Photo URL:</strong> {formData.profilePhoto}
              </p>
            </>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Address</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div>
                <label className="block text-gray-700">Profile Photo URL</label>
                <input
                  type="text"
                  name="profilePhoto"
                  value={formData.profilePhoto}
                  onChange={handleChange}
                  className="border rounded w-full py-2 px-3"
                />
              </div>
              <div className="flex justify-center space-x-2">
                <button
                  type="submit"
                  className="  bg-red-900 text-white  px-4 py-2 rounded-md transition duration-200 hover:bg-red-700"
                >
                  Update Profile
                </button>
                <button
                  type="button"
                  onClick={() => setIsEditing(false)}
                  className="border bg-red-900 text-white  px-4 py-2 rounded-md transition duration-200 hover:bg-red-700 "
                >
                  Cancel
                </button>
              </div>
            </form>
          )}
          <div className="flex justify-center space-x-2 mt-4">
            <NavLink
              to="/signIn"
              onClick={logOut}
              className="border bg-red-900 text-white  px-4 py-2 rounded-md transition duration-200 hover:bg-red-700"
            >
              Log Out
            </NavLink>
            <NavLink
              to="/"
              className="border bg-red-900 text-white  px-4 py-2 rounded-md transition duration-200 hover:bg-red-700"
            >
               Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Profile;
