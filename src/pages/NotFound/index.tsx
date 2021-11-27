import { Result } from "antd";
import { UseTitle } from "../../utils/hooks";

import "./style.css";

const Page = () => {
  UseTitle("Page Not Found");

  return (
    <div className="page-not-found">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
      />
      ,
    </div>
  );
};

export default Page;
