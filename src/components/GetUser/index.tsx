import { Spin } from "antd";
import { Navigate } from "react-router-dom";
import React, { memo, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";

import { API } from "../../config";
import { setUser } from "../../redux/features/auth";
import { UseFetch } from "../../utils/hooks";

import "./style.scss";

const Component = () => {
  const dispatch = useDispatch();

  const { data, loading, error } = UseFetch({
    API: useCallback(() => API.me(), []),
    manual: false,
  });

  useEffect(() => {
    if (data?.data) {
      dispatch(setUser(data?.data));
    }
  }, [data, dispatch]);

  if (error) {
    return <Navigate to="/login" />;
  }

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
