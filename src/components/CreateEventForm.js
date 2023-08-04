import React, { useState } from 'react';
import './CreateEventForm.css';

const CreateEventForm = ({ onCreateEvent, categories }) => {
  const [eventName, setEventName] = useState('');
  const [startTime, setStartTime] = useState('');
  const [endTime, setEndTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [bannerImage, setBannerImage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const eventData = {
      name: eventName,
      startTime,
      endTime,
      location,
      description,
      category,
      banner: bannerImage, 
    };

   
    onCreateEvent(eventData);
    setEventName('');
    setStartTime('');
    setEndTime('');
    setLocation('');
    setDescription('');
    setCategory('');
    setBannerImage('');
  };

  return (
    <div className="create-event-form-container">
      <h2>Create Event</h2>
      <form className="create-event-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Event Name:</label>
          <input type="text" value={eventName} onChange={(e) => setEventName(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Start Time:</label>
          <input type="datetime-local" value={startTime} onChange={(e) => setStartTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>End Time:</label>
          <input type="datetime-local" value={endTime} onChange={(e) => setEndTime(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Location:</label>
          <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
        </div>
        <div className="form-group">
          <label>Description:</label>
          <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div className="form-group">
        <label>Category:</label>
          <select value={category} onChange={(e) => setCategory(e.target.value)} required>
            <option value="">Select Category</option>
            {categories.map((categoryOption) => (
              <option key={categoryOption} value={categoryOption}>
                {categoryOption}
              </option>
            ))}
          </select>
        </div>
        <div className="form-group">
          <label>Banner Image:</label>
          <input type="file" accept="image/*" onChange={(e) => setBannerImage(e.target.files[0])} />
        </div>
        <button type="submit">Create Event</button>
      </form>
    </div>
  );
};

export default CreateEventForm;
