import React from 'react';
import CreateEventForm from './CreateEventForm';

const CreateEventPage = ({ onCreateEvent, categories }) => {
  return (
    <div className="create-event-page">
      <div className="create-event-container">
        <h2>Create Event</h2>
        {}
        <CreateEventForm onCreateEvent={onCreateEvent} categories={categories} />
      </div>
    </div>
  );
};

export default CreateEventPage;

