import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";

const Hook = () => {
  const user = useSelector((state: RootState) => state.auth.user);
  return { user };
};

export default Hook;
