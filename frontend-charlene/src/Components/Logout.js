import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import "./styles.css";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (isAuthenticated) {
    return (
      <button className="btn px-3 logoutBtn" onClick={() => logout({ returnTo: window.location.origin })}>
        Log Out
      </button>
    );
  }

  return null;
};

export default LogoutButton;
