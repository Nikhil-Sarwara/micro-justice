import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AskQuestion from "../pages/AskQuestion";
import Careers from "../pages/Careers";
import Privacy from "../pages/Privacy";
import Status from "../pages/Status";
import Terms from "../pages/Terms";
import Help from "../pages/Help";
import About from "../pages/About";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: <Dashboard /> },
    { path: "/careers", element: <Careers /> },
    { path: "/help", element: <Help /> },
    { path: "/ask-question", element: <AskQuestion /> },
    { path: "/privacy", element: <Privacy /> },
    { path: "/status", element: <Status /> },
    { path: "/terms", element: <Terms /> },
    { path: "/about", element: <About /> },
    
    {
      path: "*",
      element: <h1>Not Found</h1>,
    },
  ]);

  return routes;
};

export default AppRoutes;
