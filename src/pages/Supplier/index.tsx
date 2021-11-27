import { Container } from "../../components";
import { UseTitle } from "../../utils/hooks";

const Page = () => {
  UseTitle("Supplier");

  return (
    <div>
      <Container>
        <div>Supplier</div>
      </Container>
    </div>
  );
};

export default Page;
