import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ element: Component, ...rest }) => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Perform authentication check
    const page = window.location.pathname;
    fetch(page)
      .then((res) => {
        if (res.status === 401) {
          setIsAuthenticated(false);
          alert("Permission Denied\nPlease log in.");
          navigate("/");
        } else {
          setIsAuthenticated(true);
        }
      })
      .catch((error) => {
        console.log("Error:", error);
        setIsAuthenticated(false);
        navigate("/");
      });
  }, [navigate]);

  if (!isAuthenticated) {
    return null; // or show loading spinner or any other fallback
  }

  return <Component {...rest} />;
};

export default ProtectedRoute;
