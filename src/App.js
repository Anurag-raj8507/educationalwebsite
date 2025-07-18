import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhyChooseUs from './components/WhyChooseUs';
import Courses from './components/Courses';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Register from './components/Register';
import './index.css';

function App() {
  return (
   <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <WhyChooseUs />
            <Courses />
            <AboutUs />
            <ContactUs />
          </>
        } />
        <Route path="/courses" element={<Courses />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
