import { Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { Box, Container } from "../../components";
import { UseTitle } from "../../utils/hooks";
import { Card, Col, Row } from "antd";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
  { name: "Group E", value: 278 },
  { name: "Group F", value: 189 },
];

const Page = () => {
  UseTitle("Dashboard");

  return (
    <div className="page">
      <Container>
        <div>
          <h1>Dashboard</h1>
        </div>
        <Card>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Card>
        <Box height={20} />
        <Row gutter={16}>
          <Col span={12}>
            <Card>asdasd</Card>
          </Col>
          <Col span={12}>
            <Card>
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
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
