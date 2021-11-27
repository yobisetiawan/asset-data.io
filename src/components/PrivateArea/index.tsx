import React, { memo } from "react";

import { Outlet } from "react-router-dom";

import Nav from "../Nav";

import GetUser from "../GetUser";
import { UseUser } from "../../utils/hooks";

const Component = () => {
  const { user } = UseUser();

  return (
    <div>
      <GetUser />
      <Nav />

      {user !== null && <Outlet />}
    </div>
  );
};

export default memo(Component);
