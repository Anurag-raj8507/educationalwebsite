// const Hero = () => {
//   return (
//     <section className="hero">
//       <h2>Unlock Your Learning Potential</h2>
//       <p>Join thousands of learners worldwide and boost your skills!</p>
//       <button>Get Started</button>
//     </section>
//   );
// };

// export default Hero;

// src/components/Hero.js
import React, { useState, useEffect } from 'react';
import './Hero.css';

const images = [
  '/images/course1.jpg',
  '/images/course2.jpg',
  '/images/olympiad2.jpg',
  '/images/sainik.png',
  '/images/navodaya.png',
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000); // 10 seconds
    return () => clearInterval(interval);
  }, []);

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  const scrollToCourses = () => {
    const element = document.getElementById('courses');
    if (element) element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="hero-container">
      <div className="hero-slider">
        <img src={images[current]} alt={`slide-${current}`} className="hero-image" />
        <button className="arrow left" onClick={goToNext}>&lt;</button>
        <button className="arrow right" onClick={goToPrev}>&gt;</button>
      </div>
      <div className="hero-content">
        <h2>Unlock Your Learning Potential</h2>
        <button className="get-started-btn" onClick={scrollToCourses}>Get Started</button>
      </div>
    </div>
  );
};

export default Hero;
