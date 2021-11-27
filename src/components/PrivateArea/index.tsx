import React, { memo } from "react";

import { Outlet } from "react-router-dom";

import Nav from "../Nav";

import GetUser from "../GetUser";

const Component = () => {
  window.console.log("private area");

  return (
    <div>
      <GetUser />
      <Nav />
      <Outlet />
    </div>
  );
};

export default memo(Component);
