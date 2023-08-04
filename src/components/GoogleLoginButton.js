import React from 'react';
import { GoogleLogin } from 'react-google-login';

const GoogleLoginButton = ({ onLoginSuccess, onLoginFailure }) => {
  const clientId = '918937343936-6hcjge4qs4ak43krn22vpfrjns1cjvug.apps.googleusercontent.com';

  const handleSuccess = (response) => {
    console.log('Google login success:', response);
    onLoginSuccess(response);
  };

  const handleFailure = (error) => {
    console.error('Google login error:', error);
    onLoginFailure(error);
  };

  return (
    <GoogleLogin
      clientId={clientId}
      buttonText="Sign in with Google"
      onSuccess={handleSuccess}
      onFailure={handleFailure}
      cookiePolicy={'single_host_origin'}
    />
  );
};

export default GoogleLoginButton;
