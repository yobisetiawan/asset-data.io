import { Navigate } from "react-router-dom";

const Page = () => {
  const isLogin = true;
  if (isLogin) {
    return <Navigate to="/login" />;
  }
  return <div>Welcome</div>;
};

export default Page;
