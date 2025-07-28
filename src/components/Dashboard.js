import React from "react";
import Courses from "../components/Courses";
import AboutUs from "./AboutUs";
import WhyChooseUs from "./WhyChooseUs";
const Dashboard = () => {
  return (
    <section className="section">
      <h2>Welcome to your Dashboard</h2>
      <WhyChooseUs/>
      <Courses/>
      <AboutUs/>
    </section>
  );
};

export default Dashboard;
