import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Walker",
      position: "Software Engineer",
      image: "https://i.pravatar.cc/100?img=6",
      feedback:
        "This platform helped me land my dream job in tech! The application process was smooth, and I received responses from top companies.",
    },
    {
      name: "David Brown",
      position: "Recruiter, Tech Solutions",
      image: "https://i.pravatar.cc/100?img=7",
      feedback:
        "As a recruiter, I found amazing candidates here. The job posting and management tools made the process seamless.",
    },
    {
      name: "Linda Johnson",
      position: "Marketing Specialist",
      image: "https://i.pravatar.cc/100?img=8",
      feedback:
        "I was able to favorite job listings and easily apply to several roles. I got hired within weeks!",
    },
    {
      name: "Michael Green",
      position: "HR Manager, InnovateCorp",
      image: "https://i.pravatar.cc/100?img=9",
      feedback:
        "The platform helped us fill key positions in our company faster than ever. The user experience is fantastic!",
    },
    {
      name: "Emma White",
      position: "UI/UX Designer",
      image: "https://i.pravatar.cc/100?img=10",
      feedback:
        "Finding a job that fit my skills and passion was so easy here. I loved the clean interface and advanced search options.",
    },
    {
      name: "James Smith",
      position: "Data Analyst",
      image: "https://i.pravatar.cc/100?img=11",
      feedback:
        "The insights I gained from job postings and company reviews helped me make informed decisions. Highly recommend this platform!",
    },
  ];

  return (
    <section className="py-10 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8">
          What Our Users Are Saying
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card w-full animate-slide-up transition-transform transform hover:scale-105 hover:shadow-2xl bg-white shadow-xl">
              <div className="card-body">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="text-xl font-semibold">
                      {testimonial.name}
                    </h3>
                    <p className="text-gray-500">{testimonial.position}</p>
                  </div>
                </div>
                <p className="mt-4">{testimonial.feedback}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
