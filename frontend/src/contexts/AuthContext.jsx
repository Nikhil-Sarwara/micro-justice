import React, { createContext, useContext, useState, useEffect } from "react";

export const AuthContext = createContext();

const STORAGE_KEY = "microjustice_auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Try to load from localStorage on initial render
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored).user : null;
    }
    return null;
  });

  const [token, setToken] = useState(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored).token : null;
    }
    return null;
  });

  // Save to localStorage whenever user or token changes
  useEffect(() => {
    if (user && token) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ user, token }));
    } else {
      localStorage.removeItem(STORAGE_KEY);
    }
  }, [user, token]);

  const login = (userData, jwtToken) => {
    setUser(userData);
    setToken(jwtToken);
  };

  const logout = () => {
    setUser(null);
    setToken(null);
  };

  const isAuthenticated = !!token && !!user;
  const userId = user?.id; // Derive userId from the user object

  return (
    <AuthContext.Provider
      value={{ user, userId, token, login, logout, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
