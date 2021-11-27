import React, { memo } from "react";

import "./style.css";

interface Props {
  children: React.ReactNode;
}

const Component = ({ children }: Props) => {
  return <div className="c-container">{children}</div>;
};

export default memo(Component);
