import { Typography } from "antd";
import { Container } from "../../components";

import "./style.css";

const { Title } = Typography;

const Page = () => {
  return (
    <div className="page-not-found">
      <Container>
        <Title>404, Page Not Found</Title>
      </Container>
    </div>
  );
};

export default Page;
