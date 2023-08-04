import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import CreateEventForm from './components/CreateEventForm';
import GoogleLoginButton from './components/GoogleLoginButton'; 
const Navbar = ({ onCreateEvent }) => {
  const [showCreateForm, setShowCreateForm] = useState(false);

  const handleCreateEvent = (newEvent) => {
    onCreateEvent(newEvent);
    setShowCreateForm(false);
  };

  const handleGoogleLoginSuccess = (response) => {
    
    console.log('Google login success:', response);
  };

  const handleGoogleLoginFailure = (error) => {
    
    console.error('Google login error:', error);
  };

  return (
    <div className="navbar">
      <div className="logo">MyEvents</div>
      <div className="nav-links">
        {}
        <GoogleLoginButton
          onLoginSuccess={handleGoogleLoginSuccess}
          onLoginFailure={handleGoogleLoginFailure}
        />
        {}
        <Link to="/create">
          <button className="nav-button">Create Event</button>
        </Link>
      </div>
      {showCreateForm && <CreateEventForm onCreateEvent={handleCreateEvent} />}
    </div>
  );
};

export default Navbar;
