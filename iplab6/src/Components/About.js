import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './About.css';

function About() {
  return (
    <div>
      {/* Header */}
      
      {/* About Content */}
      <div className="about container mt-5">
        <h2 className="text-center">Welcome to Maplewood Academy</h2>
        <p className="lead text-justify mt-4">
          Our college has been a leading institution in providing top-quality education for over 50 years.
          We offer a wide range of courses in various disciplines to ensure our students excel in their chosen fields.
        </p>
        <p className="text-justify">
          Our mission is to nurture talent, encourage creativity, and instill a passion for learning that lasts a lifetime.
          With experienced faculty and state-of-the-art facilities, we strive to provide an unparalleled educational experience.
        </p>
        <p className="text-justify">
          Join us to explore, learn, and grow. We welcome students from all backgrounds to become a part of our inclusive and vibrant community.
        </p>
      </div>
      
      {/* Footer */}
    </div>
  );
}

export default About;
