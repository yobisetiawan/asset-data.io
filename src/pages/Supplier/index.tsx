import { Container } from "../../components";

import Table from "./Table";

import { UseTitle } from "../../utils/hooks";

const Page = () => {
  UseTitle("Supplier");

  return (
    <div className="page page-supplier">
      <Container>
        <Table />
      </Container>
    </div>
  );
};

export default Page;
