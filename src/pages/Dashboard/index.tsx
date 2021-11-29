import { Box, Container } from "../../components";
import { UseTitle } from "../../utils/hooks";
import { Col, Row } from "antd";

import Statistic from "./Statistic";
import FullCalendar from "./FullCalendar";
import Progress from "./Progress";
import Pie from "./Pie";
import Table from "./Table";

const Page = () => {
  UseTitle("Dashboard");

  return (
    <div className="page page-dashboard">
      <Container>
        <Statistic />
        <FullCalendar />
        <Box height={20} />

        <Row gutter={16}>
          <Col xs={24} sm={12}>
            <Progress />
            <Box height={20}></Box>
          </Col>
          <Col xs={24} sm={12}>
            <Pie />
            <Box height={20}></Box>
          </Col>
        </Row>

        <Table />
      </Container>
    </div>
  );
};

export default Page;
