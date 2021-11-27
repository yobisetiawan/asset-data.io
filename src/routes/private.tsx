import React from "react";
import Dashboard from "../pages/Dashboard";
import Profile from "../pages/Profile";
import Supplier from "../pages/Supplier";
import Logout from "../pages/Logout";

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
  {
    path: "/logout",
    component: <Logout />,
  },
];

export default routes;
