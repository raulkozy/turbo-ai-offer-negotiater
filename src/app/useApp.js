import { useState } from "react";

const initialState = {
  order: 1,
};

const useApp = () => {
  const [rootState, setRootState] = useState(initialState);

  return {
    ...rootState,
  };
};

export default useApp;
