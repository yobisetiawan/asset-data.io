import React, { memo } from "react";

import { Outlet } from "react-router-dom";

import Nav from "../Nav";

import GetUser from "../GetUser";
import { UseUser } from "../../utils/hooks";
import { Card, Skeleton } from "antd";

import Container from "../Container";

const Component = () => {
  const { user } = UseUser();

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
