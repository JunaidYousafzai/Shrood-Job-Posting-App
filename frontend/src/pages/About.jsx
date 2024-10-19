import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container my-5 mx-auto text-center px-4 sm:px-6 lg:px-8">
        <div className="w-full text-center md:w-2/3 mx-auto p-6">
          <h1 className="text-3xl font-bold mb-4 animate-slide-up md:text-4xl">
            About Us: Revolutionizing the Job Search Experience
          </h1>
          <p className="mb-4 animate-slide-up text-sm sm:text-base">
            In today’s fast-paced world, finding the right job can feel overwhelming. At <strong>Shrood</strong>, we believe that the job search process should be seamless, efficient, and tailored to the needs of both job seekers and employers. Our mission is to bridge the gap between talent and opportunity, creating a platform where skills meet demand.
          </p>
          <h2 className="text-2xl font-semibold mb-2 animate-slide-up md:text-3xl">
            Who We Are
          </h2>
          <p className="mb-4 animate-slide-up text-sm sm:text-base">
            Founded by a team of passionate professionals with diverse backgrounds in technology, recruitment, and human resources, <strong>Shrood</strong> was born out of a desire to simplify the job-hunting journey. We understand the challenges faced by job seekers—endless scrolling through job boards, generic listings, and the struggle to find roles that truly fit their skills and aspirations. Similarly, we recognize the difficulties employers encounter in sifting through numerous applications to find the right candidates.
          </p>
          <h2 className="text-2xl font-semibold mb-2 animate-slide-up md:text-3xl">
            Our Vision
          </h2>
          <p className="mb-4 animate-slide-up text-sm sm:text-base">
            Our vision is to create a user-friendly platform that not only connects job seekers with potential employers but also fosters meaningful relationships. We aim to empower users with the tools and resources they need to succeed, whether it’s through personalized job recommendations, insightful career articles, or access to industry trends.
          </p>
          <h2 className="text-2xl font-semibold mb-2 animate-slide-up md:text-3xl">
            What We Offer
          </h2>
          <ul className="list-disc list-inside mb-4 text-left text-sm sm:text-base">
            <li><strong>Tailored Job Listings:</strong> Using advanced algorithms, our app provides personalized job recommendations based on user preferences, skills, and career goals.</li>
            <li><strong>Employer Insights:</strong> Employers can easily create detailed job postings, access a rich pool of candidates, and leverage analytics to refine their hiring strategies.</li>
            <li><strong>Community and Resources:</strong> Beyond job postings, we offer a wealth of resources, including articles, webinars, and networking opportunities, to help users grow and thrive in their careers.</li>
          </ul>
          <h2 className="text-2xl font-semibold mb-2 animate-slide-up md:text-3xl">
            Our Commitment
          </h2>
          <p className="mb-4 animate-slide-up text-sm sm:text-base">
            At <strong>Shrood</strong>, we are committed to inclusivity and diversity. We strive to create an environment where all individuals, regardless of their background, have equal access to opportunities. Our platform is designed to promote a fair hiring process and support companies in building diverse teams.
          </p>
          <h2 className="text-2xl font-semibold mb-2 animate-slide-up md:text-3xl">
            Join Us on This Journey
          </h2>
          <p className="animate-slide-up text-sm sm:text-base">
            Whether you’re a job seeker eager to find your dream role or an employer looking for top talent, <strong>Shrood</strong> is here to support you every step of the way. Join us in transforming the job search experience and building a future where everyone can find their perfect fit.
          </p>
          <p className="mt-4 animate-slide-up font-bold text-sm sm:text-base">
            Explore our app today and take the next step in your career journey!
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
