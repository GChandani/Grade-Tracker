import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useHistory } from 'react-router-dom'; 

const LoginButton = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const history = useHistory();

  const handleLogin = () => {
    loginWithRedirect();
  };

  if (!isAuthenticated) {
    return (
      <button
        className="btn btn-primary mx-5 my-5 px-4"
        onClick={handleLogin}
      >
        Log In
      </button>
    );
  }


  history.push('/dashboard');
  return null; 
};

export default LoginButton;