import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/features/auth";
import TokenManager from "../../utils/helpers/TokenManager";

import Container from "../Container";

import "./style.css";

const Component = () => {
  const dispatch = useDispatch();
  const nav = useNavigate();

  const logout = useCallback(
    (e) => {
      e.preventDefault();
      dispatch(setUser(null));
      TokenManager.ereaseToken();
      nav("/login");
    },
    [dispatch, nav]
  );

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
            <a href="#logout" onClick={logout}>
              Logout
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default memo(Component);
