import React, { memo } from "react";

import { Card } from "antd";
import { Legend, Pie, PieChart, ResponsiveContainer } from "recharts";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const Component = () => {
  return (
    <Card title="Insurance Claim By Status">
      <ResponsiveContainer width="100%" height={400}>
        <PieChart width={400} height={400}>
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={data01}
            fill="#8884d8"
            label
            innerRadius={70}
          />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
};

Component.defaultProps = {};

export default memo(Component);
