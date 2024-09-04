import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom'; // Import useHistory

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const history = useHistory(); // Initialize history

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (!isAuthenticated) {
    return (
      <button
        className="btn btn-primary px-3 loginBtn"
        onClick={handleLogin}
      >
        Log In
      </button>
    );
  }

  // Redirect to the dashboard if the user is authenticated
  history.push('/dashboard');
  return null; // You can return null or any other content
};

export default LoginButton;