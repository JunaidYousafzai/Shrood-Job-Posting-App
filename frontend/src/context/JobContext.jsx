import { createContext, useContext, useEffect, useState } from "react";
import { useAuthentication } from "./AuthContext";
import axios from "axios";

export const UserJobContext = createContext("");

export const UserJobContextProvider = ({ children }) => {
  const { user } = useAuthentication();
  const [userpostedJobs, setUserPostedJobs] = useState([]);

  const PostedJobs = async () => {
    if (user && user.token) {
      try {
        const { data } = await axios.get("http://localhost:3000/api/my-jobs", {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        console.log(data);
        
        setUserPostedJobs(data);
      } catch (err) {
        console.error("Error getting posted jobs:", err);
      }
    }
  };

  // useEffect(() => {
  //   PostedJobs();
  // }, [user]);

  return (
    <UserJobContext.Provider value={{ userpostedJobs, setUserPostedJobs, PostedJobs }}>
      {children}
    </UserJobContext.Provider>
  );
};

export const useUserJobs = () => useContext(UserJobContext);
