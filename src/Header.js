import React, { useState, useMemo } from 'react';
import './Header.css';
import eventsData from './data/eventsData';

const Header = ({ onSearch, onFilter }) => {
  const [eventName, setEventName] = useState('');
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedDate, setSelectedDate] = useState('');

  const handleSearch = () => {
    
    onSearch(eventName);
  };

  const handleFilter = () => {
    
    onFilter(selectedCity, selectedCategory, selectedDate);
  };

  const cities = useMemo(() => [...new Set(eventsData.map((event) => event.location))], []);
  const categories = useMemo(() => [...new Set(eventsData.map((event) => event.category))], []);

  return (
    <div className="header">
      <div className="background-image">
        <img src={process.env.PUBLIC_URL + '/images/event.jpg'} alt="Background" />
        <h1 className="heading">Welcome to My Events</h1>
      </div>

      <div className="search-container">
        <input
          type="text"
          placeholder="Search by Event Name"
          value={eventName}
          onChange={(e) => setEventName(e.target.value)}
        />
        <button className="search-button" onClick={handleSearch}>
          Search
        </button>
      </div>
      <div className="filter-options">
        <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
        <select value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)}>
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} />
        <button className="filter-button" onClick={handleFilter}>
          Filter
        </button>
      </div>
    </div>
  );
};

export default Header;


