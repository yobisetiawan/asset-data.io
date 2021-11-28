import { Alert } from "antd";
import React, { memo } from "react";

interface Props {
  error: any;
}

const Component = ({ error }: Props) => {
  const msg = error?.response?.data?.message || "";

  if (msg !== "") {
    return (
      <Alert
        message={
          <div>
            <h4>{msg}</h4>
            {Object.entries(error?.response?.data?.data?.fields || []).map(
              (ii: any, index: number) => {
                return <div key={index}>{ii[1].join(", ")}</div>;
              }
            )}
          </div>
        }
        type="error"
        showIcon
        style={{ marginBottom: 30 }}
      />
    );
  }

  return <></>;
};

Component.defaultProps = {};

export default memo(Component);
