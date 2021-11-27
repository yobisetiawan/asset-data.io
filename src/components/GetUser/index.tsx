import { Spin } from "antd";
import React, { memo, useCallback } from "react";

import { API } from "../../config";
import { UseFetch } from "../../utils/hooks";

import "./style.css";

const Component = () => {
  const { loading } = UseFetch({
    API: useCallback(() => API.me(), []),
    manual: false,
  });

  if (loading) {
    return (
      <div className="c-get-user">
        <Spin size="large" />
      </div>
    );
  }

  return <></>;
};

export default memo(Component);
