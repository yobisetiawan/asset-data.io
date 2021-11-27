import React, { memo } from "react";
import { Link } from "react-router-dom";

const Component = () => {
  return (
    <nav>
      <Link to="/login">Login</Link> | <Link to="/dashboard">Dashboard</Link>
    </nav>
  );
};

export default memo(Component);
