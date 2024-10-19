import React from 'react';
import Header from './Header';
import Footer from './Footer';
import './Courses.css';

const courseList = [
  { 
    id: 1, 
    name: 'Computer Science', 
    description: 'Learn programming, data structures, AI, and more. Our curriculum emphasizes practical experience with real-world applications, preparing you for a successful career in technology.'
  },
  { 
    id: 2, 
    name: 'Business Management', 
    description: 'Gain skills in leadership, finance, and marketing. This program is designed to equip you with the knowledge to excel in various business environments and lead teams effectively.'
  },
  { 
    id: 3, 
    name: 'Biotechnology', 
    description: 'Explore the world of genetics, molecular biology, and bioengineering. This course offers insights into innovative biotechnological applications that impact health and the environment.'
  }
];

function Courses() {
  return (
    <div>
      
      {/* Courses Content */}
      <div className="courses container mt-5">
        <h2 className="text-center">Courses We Offer</h2>
        <div className="row mt-4">
          {courseList.map(course => (
            <div key={course.id} className="col-md-4 mb-4">
              <div className="card shadow">
                <div className="card-body text-center"> {/* Center align the text */}
                  <h5 className="card-title">{course.name}</h5>
                  <p className="card-text">{course.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
    
    </div>
  );
}

export default Courses;
