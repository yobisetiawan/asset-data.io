import React, { memo } from "react";

import { Outlet } from "react-router-dom";

const Component = () => {
  return (
    <div>
      <p>Public area</p>

      <Outlet />
    </div>
  );
};

export default memo(Component);
