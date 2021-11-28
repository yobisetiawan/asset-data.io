import React from "react";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Supplier from "../pages/Supplier";

const routes = [
  {
    path: "/dashboard",
    component: <Dashboard />,
  },
  {
    path: "/profile",
    component: <Profile />,
  },
  {
    path: "/supplier",
    component: <Supplier />,
  },
];

export default routes;
