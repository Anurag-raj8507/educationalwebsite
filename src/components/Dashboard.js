import React from "react";
import Courses from "../components/Courses";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
const Dashboard = () => {
  return (
    <section className="section">
      <h2>Welcome to your Dashboard</h2>
      <div className="popular-videos">
        <h2>Our Popular Videos</h2>
        <div className="video-grid">
          <div className="video-card">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/EtviIN_17jk?si=yvFZW_W6DAAeql22" 
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>Trigonometry is the study of the relationship between the angles and sides of a right-angled triangle. Its basic ratios are sine, cosine, tangent, and their reciprocals.</p>
          </div>
          <div className="video-card">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/FDjC1ICMClc?si=SK-8GlOEYWRZ0IY-"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>Trigonometric Identities are equations involving trigonometric ratios that are always true for all values of angles. They help in simplifying and solving trigonometric expressions easily.</p>
          </div>
          <div className="video-card">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/FLUTJDQ6ybY?si=rNZ9xaXucaKdGo-h"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>Linear Equations in Two Variables represent equations of the form ax + by + c = 0. Their solutions are shown as straight lines on a graph, and questions are based on finding solutions, plotting graphs, and interpreting the point of intersection.</p>
          </div>
         <div className="video-card">
            <iframe
              width="100%"
              height="215"
              src=" https://www.youtube.com/embed/hx40QOuLywA?si=lhi9KXtLkLzKJDeS"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>Algebraic Methods for solving linear equations include substitution, elimination, and cross-multiplication. These methods help find the exact solution of two equations without using graphs.</p>
          </div>
          <div className="video-card">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/YaQPkOdlZfg?si=MylDd8XMYEpVZeGO"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>Motion is the change in position of an object with respect to time. It can be uniform or non-uniform depending on the speed.
Physical Quantities are properties that can be measured, like length, mass, time, speed, and are expressed with a numerical value and a unit.</p>
          </div>
          <div className="video-card">
            <iframe
              width="100%"
              height="215"
              src="https://www.youtube.com/embed/DQ2nOHAHNRo?si=vK4k1wVxOtj1LvGF"
              title="YouTube video player"
              allowFullScreen
            ></iframe>
            <p>Uniform Motion occurs when an object covers equal distances in equal intervals of time.
Non-uniform Motion occurs when an object covers unequal distances in equal intervals of time.</p>
          </div>
        </div>
      </div>
      <WhyChooseUs/>
      <Courses/>
      <AboutUs/>
    </section>
  );
};

export default Dashboard;
