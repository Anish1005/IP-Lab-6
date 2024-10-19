import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './Components/About';
import Courses from './Components/Courses';
import Events from './Components/Events';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

function App() {
    return (
        <Router>
            <div>
                <Header />
                <div className="app-content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/courses" element={<Courses />} />
                        <Route path="/events" element={<Events />} />
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

// Expanded Home Component
function Home() {
    return (
        <div className="home text-center">
            <h1>Welcome to Maplewood Academy</h1>
            <p>
                Our college is a vibrant community that aims to nurture students into future leaders.
                With a range of courses, events, and extra-curricular activities, we ensure that every
                student has a fulfilling and enriching experience.
            </p>
            <p>Learn more about what we offer on the Courses page, explore upcoming Events, and read more about us in the About section.</p>
            
            {/* Adjusted Section Layout */}
            <div className="section">
                <h3>Why Choose Us?</h3>
                <ul className="why-choose-us">
                    <li>State-of-the-art campus facilities, including modern laboratories, libraries, and recreational spaces that provide a conducive learning environment.</li>
                    <li>Experienced and qualified faculty who bring a wealth of knowledge and industry experience to the classroom, ensuring students receive the best education possible.</li>
                    <li>A variety of student clubs and activities, from sports teams to cultural societies, allowing students to explore their interests and develop soft skills.</li>
                    <li>Strong focus on research and development, with opportunities for students to work on cutting-edge projects alongside faculty members.</li>
                    <li>Comprehensive career support, including internship placements, job fairs, and personalized career counseling to help students transition smoothly into the workforce.</li>
                    <li>Diverse and inclusive community that fosters collaboration and understanding, providing students with a global perspective and lifelong friendships.</li>
                    <li>Flexible learning programs, including part-time and online courses, to accommodate students' varied schedules and commitments.</li>
                </ul>
            </div>
            <div className="section">
                <h3>Our Mission</h3>
                <p>
                    We strive to provide a holistic education that empowers students to excel in
                    their chosen fields and contribute positively to society. Our mission is to
                    cultivate a learning environment that encourages critical thinking, creativity,
                    and collaboration.
                </p>
            </div>
            <div className="section">
                <h3>Contact Us</h3>
                <p>Email: info@maplewoodacad.edu</p>
                <p>Phone: +1 (555) 123-4567</p>
            </div>
        </div>
    );
  }
  


export default App;
