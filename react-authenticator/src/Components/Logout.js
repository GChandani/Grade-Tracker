import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Profile from "./Profile";
 
const LogoutButton = () => {
    const { logout, isAuthenticated } = useAuth0();
 
    if (isAuthenticated) {
        return (
            <>
                <button className="btn btn-primary 
                    mx-5 my-5 px-4 logoutBtn"
                    onClick={() => logout({ returnTo: window.location.origin })}
                    style={{
                        position: "absolute",
                        top: "10px", 
                        right: "10px", 
                        zIndex: 999, 
                    }}>
                    Log Out
                </button>
                <br />
            </>
        );
    }
};
 
export default LogoutButton;