import React, { memo } from "react";
import { Link } from "react-router-dom";

import Container from "../Container";

import "./style.css";

const Component = () => {
  return (
    <nav className="c-main-nav">
      <Container>
        <ul>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
          <li>
            <Link to="/supplier">Supplier</Link>
          </li>
          <li>
            <Link to="/profile">Profile</Link>
          </li>
          <li>
            <Link to="/logout">Logout</Link>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default memo(Component);
