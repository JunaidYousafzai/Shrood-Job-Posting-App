import React from "react";
import heroImage from "../assets/hero-section-img.webp";
import { NavLink } from "react-router-dom";

const HeroSection = () => {
  return (
    <div
      className="hero animate-slide-up  min-h-screen "
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
      }}
    >
      <div className="hero-overlay bg-black bg-opacity-60"></div> 
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md text-white ">
          <h1 className="mb-5 text-5xl font-bold">Find Your Dream Job Today!</h1>
          <p className="mb-5 ">
            Join our community of job seekers and employers, where endless opportunities await! Whether you're looking for a part-time gig, a full-time position, or a freelance project, we’ve got you covered. Explore a diverse range of job listings tailored to your skills and interests, and take the next step in your career journey with confidence.
          </p>
          <NavLink to="/jobs" className="btn hover:border-red-950 border-2 ">Explore Jobs</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
