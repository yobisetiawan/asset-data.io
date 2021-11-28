import {
  HomeOutlined,
  PoweroffOutlined,
  ShopOutlined,
  UserOutlined,
} from "@ant-design/icons";
import React, { memo, useCallback } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUser } from "../../redux/features/auth";
import TokenManager from "../../utils/helpers/TokenManager";

import Container from "../Container";

import "./style.scss";

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
            <Link to="/dashboard">
              <div>
                <HomeOutlined style={{ fontSize: "25px", color: "#08c" }} />
              </div>
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/supplier">
              <div>
                <ShopOutlined style={{ fontSize: "25px", color: "#08c" }} />
              </div>
              Supplier
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <div>
                <UserOutlined style={{ fontSize: "25px", color: "#08c" }} />
              </div>
              Profile
            </Link>
          </li>
          <li>
            <a href="#logout" onClick={logout}>
              <div>
                <PoweroffOutlined style={{ fontSize: "25px", color: "#08c" }} />
              </div>
              Logout
            </a>
          </li>
        </ul>
      </Container>
    </nav>
  );
};

export default memo(Component);
