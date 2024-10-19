import React, { useEffect, useState, useRef } from "react";

const JobStatsSection = () => {
  const [visible, setVisible] = useState(false);
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const ref = useRef(null);

  const cardData = [
    {
      icon: "https://via.placeholder.com/48",
      title: "500+ Jobs Uploaded Daily",
      count: 1500,
      description: "Quality jobs are uploaded every day.",
    },
    {
      icon: "https://via.placeholder.com/48",
      title: "200+ Job Applicants Daily",
      count: 2000,
      description: "Many applicants trust us for their job search.",
    },
    {
      icon: "https://via.placeholder.com/48",
      title: "400+ Active Job Listings",
      count: 1500,
      description: "Explore a wide range of job opportunities.",
    },
  ];

  const animateCount = (setCount, target) => {
    let start = 0;
    const end = target;
    const duration = 2000;
    const incrementTime = duration / end > 0 ? duration / end : 1; // prevent division by zero

    const increment = () => {
      if (start < end) {
        start++;
        setCount(start);
        setTimeout(increment, incrementTime);
      }
    };
    increment();
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          animateCount(setCount1, cardData[0].count);
          animateCount(setCount2, cardData[1].count);
          animateCount(setCount3, cardData[2].count);
          observer.disconnect(); // stop observing once animation is triggered
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (observer && ref.current) {
        observer.disconnect();
      }
    };
  }, [cardData]);

  return (
    <section className="py-16" ref={ref}>
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <div
              key={index}
              className="card animate-slide-up transition-transform transform hover:scale-105 hover:shadow-2xl p-6 rounded-lg shadow-md text-center duration-300"
            >
              <h2 className="text-2xl font-semibold mb-2">{card.title}</h2>
              <h1 className="text-3xl font-bold">
                {index === 0 ? count1 : index === 1 ? count2 : count3}+
              </h1>
              <p className="text-sm">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JobStatsSection;
