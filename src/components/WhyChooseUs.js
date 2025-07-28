import React from 'react';
import './WhyChooseUs.css';

const features = [
  {
    title: "Expert Instructor",
    image: "/images/Expert instructor 1.webp",
    description: "Learn from industry experts who simplify complex concepts for school students."
  },
  {
    title: "Interactive Learning",
    image: "/images/interactivelearning.jpg",
    description: "Hands-on projects, live coding, and real-world simulations to keep students engaged."
  },
  {
    title: "Flexible Learning",
    image: "/images/flexible.jpg",
    description: "study at your own place at anytime,any where for grades 1–10."
  },
  {
    title: "Result-Oriented",
    image: "/images/result.jpeg",
    description: "Focused preparation for Olympiads, Sainik School, Navodaya, and competitive exams."
  },
  {
    title: "Affordable Pricing",
    image: "/images/affordable.jpeg",
    description: "Top Quality courses at reasonable prices."
  }
];

function WhyChooseUs() {
  return (
    <section id="whychooseus"className="why-choose-us">
      <h2>Why Choose Us</h2>
      <div className="features-container">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <img src={feature.image} alt={feature.title} className="feature-image" />
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyChooseUs;
