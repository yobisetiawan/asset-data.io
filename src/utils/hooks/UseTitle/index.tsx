import { useEffect } from "react";

const Hook = (title: string) => {
  useEffect(() => {
    document.title = title;
  });
};

export default Hook;
