import { Navigate } from "react-router-dom";
import TokenManager from "../../utils/helpers/TokenManager";

const Page = () => {
  const isLogin = TokenManager.getToken();

  if (isLogin === null) {
    return <Navigate to="/login" />;
  }

  return <Navigate to="/dashboard" />;
};

export default Page;
