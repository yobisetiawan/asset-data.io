import { Typography } from "antd";
import { Container } from "../../components";
import { UseTitle } from "../../utils/hooks";

import "./style.css";

const { Title } = Typography;

const Page = () => {
  UseTitle("Page Not Found");

  return (
    <div className="page-not-found">
      <Container>
        <Title>404, Page Not Found</Title>
      </Container>
    </div>
  );
};

export default Page;
