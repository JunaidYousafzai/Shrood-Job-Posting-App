import { Routes, Route, BrowserRouter, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Jobs from "./pages/Jobs";
import Header from "./components/Header";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PostJob from "./pages/user/PostJob";

import UserPostedJobs from "./pages/user/userPostedJobs";
import { AuthContextProvider } from "./context/AuthContext";
import Profile from "./pages/user/Profile";
import GuestRoute from "./routes/GuestRoute";
import UserRoute from "./routes/UserRoute";
import { UserJobContextProvider } from "./context/JobContext";
import ApplyJob from "./pages/user/ApplyJob";
import JobApplicants from "./pages/user/JobApplicant";
import Footer from "./components/Footer";
import ScrollToTop from "./pages/ScrollToTop";


function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <UserJobContextProvider>
          <ScrollToTop />
          <Routes>
            {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} /> 
              <Route path="/about" element={<About />} />
              <Route path="/jobs" element={<Jobs />} />
            

            {/* Guest Routes */}
            <Route element={<GuestRoute />}>
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
            </Route>

            {/* Private Routes */}
              <Route element={<UserRoute />}>
                <Route path="/profile" element={<Profile />} />
                <Route path="/my-jobs" element={<UserPostedJobs />} />
                <Route path="/post-job" element={<PostJob />} />
                <Route path="/apply-job" element={<ApplyJob />} />
                <Route path="/job-applicants/:jobId" element={<JobApplicants />} />
              </Route>
          </Routes>
        </UserJobContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
