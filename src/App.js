import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Header from './Header';
import EventsList from './components/EventsList';
import CreateEventPage from './components/CreateEventPage'; // Import the CreateEventPage component
import eventsData from './data/eventsData';
import './App.css';
import GoogleLoginButton from './components/GoogleLoginButton';

const App = () => {
  const handleGoogleLoginSuccess = (response) => {
    
    console.log('Google login success:', response);
  };

  const handleGoogleLoginFailure = (error) => {
   
    console.error('Google login error:', error);
  };

  const [filteredEvents, setFilteredEvents] = useState(eventsData);

  const handleSearch = (eventName) => {
    
    const filtered = eventsData.filter((event) => {
      const eventNameMatch = event.name.toLowerCase().includes(eventName.toLowerCase());
      return eventNameMatch;
    });

    
    setFilteredEvents(filtered);
  };

  const handleFilter = (city, category, date) => {
    
    let filtered = eventsData;

    if (city !== '') {
      filtered = filtered.filter((event) => event.location.toLowerCase() === city.toLowerCase());
    }

    if (category !== '') {
      filtered = filtered.filter((event) => event.category.toLowerCase() === category.toLowerCase());
    }

    if (date !== '') {
      filtered = filtered.filter((event) => event.date === date);
    }

    
    setFilteredEvents(filtered);
  };

  const handleCreateEvent = (newEvent) => {
    
    setFilteredEvents([...filteredEvents, newEvent]);
  };

  
  const categories = [...new Set(eventsData.map((event) => event.category))];

  return (
    <Router>
      <div>
        <Navbar onCreateEvent={handleCreateEvent} />
        <Switch>
          <Route exact path="/">
            <Header onSearch={handleSearch} onFilter={handleFilter} />
            <EventsList filteredEvents={filteredEvents} />
          </Route>
          <Route path="/create">
            {}
            <CreateEventPage onCreateEvent={handleCreateEvent} categories={categories} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
