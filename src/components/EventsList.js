import React from 'react';
import Event from './Event';
import './EventsList.css'; 

const EventsList = ({ filteredEvents }) => {
  const rows = [];
  const eventsPerRow = 3;

  for (let i = 0; i < filteredEvents.length; i += eventsPerRow) {
    const row = filteredEvents.slice(i, i + eventsPerRow);
    rows.push(row);
  }

  return (
    <div className="events-list-container">
      <h2 className="events-list-heading">List of Events</h2>
      <div className="events-container">
        {rows.map((row, rowIndex) => (
          <div key={rowIndex} className="event-row">
            {row.map((event) => (
              <Event key={event.id} event={event} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventsList;
