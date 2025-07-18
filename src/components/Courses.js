import { useState } from 'react';

const CourseCard = ({ title, shortDesc, fullDesc }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>
        {expanded ? fullDesc : shortDesc}
        {fullDesc.length > shortDesc.length && (
          <span>
            {!expanded && '... '}
            <button onClick={() => setExpanded(!expanded)} style={{ background: 'none', color: '#0077cc', cursor: 'pointer', border: 'none', padding: 0 }}>
              {expanded ? ' Show Less' : ' Read More'}
            </button>
          </span>
        )}
      </p>
    </div>
  );
};

const Courses = () => {
  return (
    <section id="courses"className="section" style={{ backgroundColor: "#f0f8ff" }}>
      <h2>Our Popular Courses</h2>
      <div className="cards">
        <CourseCard
          title="Web Development"
          shortDesc="Master HTML, CSS, JavaScript, and modern frameworks."
          fullDesc="Master HTML, CSS, JavaScript, React, Node.js and build complete full-stack applications from scratch. Suitable for beginners and intermediate learners."
        />
        <CourseCard
          title="Data Science"
          shortDesc="Learn Python, machine learning, and AI tools."
          fullDesc="Dive deep into Python programming, statistics, machine learning, and data visualization. Perfect for those aiming at careers in analytics and data engineering."
        />
        <CourseCard
          title="Digital Marketing"
          shortDesc="Grow your business through SEO and social media."
          fullDesc="Learn SEO, Google Ads, Social Media Marketing, Content Strategy, and Email Automation to become a full-fledged digital marketer."
        />
        <CourseCard
          title="Sainik Exam Preparation"
          shortDesc="Prepare for Sainik School entrance with expert help."
          fullDesc="Covers Mathematics, Intelligence Test, and Language Test. Mock exams and interview training included for Class 6 and Class 9 Sainik entrance."
        />
        <CourseCard
          title="Olympiad Exams"
          shortDesc="Train for Maths and Science Olympiads."
          fullDesc="Extensive practice for NSO, IMO, and other national/international Olympiads with topic-wise quizzes and previous year paper discussions."
        />
        <CourseCard
          title="Navodaya Entrance"
          shortDesc="Crack the Navodaya Vidyalaya entrance exam."
          fullDesc="Includes study material for mental ability, arithmetic, and language. Ideal for Class 5 students targeting JNVST with structured revision plans."
        />
      </div>
    </section>
  );
};

export default Courses;
