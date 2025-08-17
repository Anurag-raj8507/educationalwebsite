// const Footer = () => {
//   return (
//     <footer className="footer">
//       <p> Copyright &copy; 2020 Maths wallah. All rights reserved.</p>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Contact Info */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p><FaMapMarkerAlt /> Maths Wallah , Muzaffarpur, Bihar</p>
          <p><FaPhoneAlt /> +91 9955128105</p>
          <p><FaEnvelope /> anuragraj8507@gmail.com</p>
        </div>

        {/* Quick Links or Info */}
        <div className="footer-section">
          <h3>Explore</h3>
          <ul>
            <li><a href="#courses">Courses</a></li>
            <li><a href="#whychooseus">Why Choose Us</a></li>
            <li><a href="#about">About</a></li>
            {/* <li><a href="#register.js">Register</a></li> */}
          </ul>
        </div>

        {/* Social Links */}
        <div className="footer-section">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="https://www.facebook.com/people/Maths-wallah-Anurag-raj/100063895128489/" target="_blank" rel="noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer"><FaTwitter /></a>
            <a href="https://www.instagram.com/anuragraj_2508?igsh=MWhsOG4wdHZzNXlmbg==" target="_blank" rel="noreferrer"><FaInstagram /></a>
            <a href="https://www.linkedin.com/in/anurag-raj-370929277/" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            <a href="https://wa.me/9955128105?text=Hello" target="_blank" rel="noreferrer"><FaWhatsapp /></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2020 Maths Wallah. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
