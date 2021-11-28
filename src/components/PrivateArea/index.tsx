import React, { memo } from "react";

import { Outlet, Navigate } from "react-router-dom";

import Nav from "../Nav";

import GetUser from "../GetUser";
import { UseUser } from "../../utils/hooks";
import { Card, Skeleton } from "antd";

import Container from "../Container";
import TokenManager from "../../utils/helpers/TokenManager";

const Component = () => {
  const { user } = UseUser();

  if (TokenManager.getToken() === null) {
    return <Navigate to="/login" />;
  }

  return (
    <div>
      <GetUser />
      <Nav />

      {user !== null ? (
        <Outlet />
      ) : (
        <Container>
          <Card>
            <Skeleton />
          </Card>
        </Container>
      )}
    </div>
  );
};

export default memo(Component);
