import React from "react";
import { useRoutes } from "react-router-dom";

import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Dashboard from "../pages/Dashboard";
import AskQuestion from "../pages/AskQuestion";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/login", element: <Login /> },
    { path: "/register", element: <Register /> },
    { path: "/dashboard", element: < Dashboard /> },
    {
      path: "/ask-question",
      element: <AskQuestion />,
    },{
      path: "*",
      element: <h1>Not Found</h1>,
    }
    // Add more routes here as needed
  ]);

  return routes;
};

export default AppRoutes;
