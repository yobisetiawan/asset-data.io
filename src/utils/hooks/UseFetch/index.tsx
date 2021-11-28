import { AxiosResponse } from "axios";
import { useCallback, useEffect, useReducer } from "react";

interface Props {
  API: () => Promise<AxiosResponse<any, any>>;
  manual: boolean;
}

interface State {
  loading: boolean;
  data: any;
  error: any;
}

interface Action {
  type: "pending" | "error" | "success" | "reset";
  payload?: any;
}

const initialState = { loading: false, data: null, error: null };

function reducer(state: State, action: Action) {
  switch (action.type) {
    case "pending":
      return { ...state, loading: true };
    case "success":
      return { ...state, loading: false, data: action.payload, error: null };
    case "error":
      return { ...state, loading: false, error: action.payload };
    case "reset":
      return initialState;
    default:
      return state;
  }
}

const Hook = ({ API, manual }: Props) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const fetchData = useCallback(async () => {
    dispatch({ type: "pending" });
    try {
      const { data: response } = await API();
      dispatch({ type: "success", payload: response });
    } catch (err) {
      dispatch({ type: "error", payload: err });
    }
  }, [API]);

  const onReset = useCallback(() => {
    dispatch({ type: "reset" });
  }, []);

  useEffect(() => {
    if (!manual) {
      fetchData();
    }
  }, [fetchData, manual]);

  return {
    data: state.data,
    loading: state.loading,
    error: state.error,
    fetchData,
    onReset,
  };
};

export default Hook;
