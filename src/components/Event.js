import React from 'react';
import './Event.css';

const Event = ({ event }) => {
 
  const date = new Date(event.date);
  const day = date.getDate();
  const month = date.toLocaleString('default', { month: 'short' });

  return (
    <div className="event-card">
      <img src={event.banner} alt={event.name} className="event-image" />
      <div className="event-info">
        <h2>{event.name}</h2>
        <p>{event.location}</p>
        <p>{event.description}</p>
        <p className="event-date">
          {day} {month}
        </p>
        <p>{event.isFree ? 'Free' : 'Paid'}</p>
      </div>
    </div>
  );
};

export default Event;
