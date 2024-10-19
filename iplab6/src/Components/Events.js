import React, { useState } from 'react';
import Header from './Header';
import Footer from './Footer';
import './Events.css';

function Events() {
  const [message, setMessage] = useState('No event selected');

  const events = [
    { name: 'Seminar on AI', date: 'October 20, 2024' },
    { name: 'Annual Sports Day', date: 'November 5, 2024' },
    { name: 'Cultural Fest', date: 'December 15, 2024' }
  ];

  const handleClick = (eventName, eventDate) => {
    setMessage(`${eventName} occurs on ${eventDate}`);
  };

  return (
    <div>
      {/* Header */}

      {/* Events Content */}
      <div className="events container mt-5">
        <h2 className="text-center">Upcoming Events</h2>
        <div className="list-group mt-4">
          {events.map((event, index) => (
            <button 
              key={index} 
              type="button" 
              className="list-group-item list-group-item-action" 
              onClick={() => handleClick(event.name, event.date)}
            >
              {event.name}
            </button>
          ))}
        </div>
        <p className="mt-4 text-center">{message}</p>
      </div>

      {/* Footer */}
    </div>
  );
}

export default Events;
