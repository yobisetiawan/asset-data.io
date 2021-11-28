import { Legend, Pie, PieChart, ResponsiveContainer } from "recharts";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // a plugin!

import { Box, Container } from "../../components";
import { UseTitle } from "../../utils/hooks";
import { Card, Col, Row, Statistic } from "antd";

const data01 = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
];

const Page = () => {
  UseTitle("Dashboard");

  return (
    <div className="page">
      <Container>
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic title="Total Policies" value={112893} />
            </Card>
            <Box height={20}></Box>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic title="Total Unassigned Assets" value={112893} />
            </Card>
            <Box height={20}></Box>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic title="Total User" value={112893} />
            </Card>
            <Box height={20}></Box>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic title="Total User" value={112893} />
            </Card>
            <Box height={20}></Box>
          </Col>
          <Col xs={24} sm={12}>
            <Card>
              <Statistic title="Total Audited Assets" value={112893} />
            </Card>
            <Box height={20}></Box>
          </Col>
        </Row>

        <Card>
          <FullCalendar plugins={[dayGridPlugin]} initialView="dayGridMonth" />
        </Card>
        <Box height={20} />
        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Card>asdasd</Card>
            <Box height={20}></Box>
          </Col>
          <Col xs={24} sm={12}>
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
            <Box height={20}></Box>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Page;
