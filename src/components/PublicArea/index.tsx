import React, { memo } from "react";

import { Outlet } from "react-router-dom";

const Component = () => {
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default memo(Component);
