import React, { memo } from "react";

interface Props {
  width: number;
  height: number;
}

const Component = ({ width, height }: Props) => {
  return <div style={{ width: width, height: height }}></div>;
};

Component.defaultProps = {
  width: 0,
  height: 0,
};

export default memo(Component);
