import { AxiosResponse } from "axios";
import { useCallback, useEffect, useState } from "react";

interface Props {
  API: () => Promise<AxiosResponse<any, any>>;
  manual: boolean;
}

const Hook = ({ API, manual }: Props) => {
  const [data, setData] = useState(null) as any;
  const [error, setError] = useState(null) as any;
  const [loading, setLoading] = useState(false);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const { data: response } = await API();
      setData(response);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
  }, [API]);

  useEffect(() => {
    if (!manual) {
      fetchData();
    }
  }, [fetchData, manual]);

  return {
    data,
    loading,
    error,
    fetchData,
  };
};

export default Hook;
