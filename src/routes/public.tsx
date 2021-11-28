import React from "react";
import Login from "../pages/Login";
import Welcome from "../pages/Welcome";

const routes = [
  {
    path: "/",
    component: <Welcome />,
  },
  {
    path: "login",
    component: <Login />,
  },
];

export default routes;
