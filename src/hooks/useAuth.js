import { useState, useEffect } from "react";

const useAuth = () => {
  // Use a function to lazily initialize auth from localStorage
  const [auth, setAuth] = useState(() => localStorage.getItem("token") || "");

  useEffect(() => {
    // Update auth state from localStorage when the component mounts
    const token = localStorage.getItem("token");
    if (token) {
      setAuth(token);
    }
  }, []);

  const setAuthToken = (token) => {
    localStorage.setItem("token", token);
    setAuth(token);
  };

  return { authToken: auth, setAuthToken };
};

export default useAuth;
