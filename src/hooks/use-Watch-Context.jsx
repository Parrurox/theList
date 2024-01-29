import { useContext } from "react";
import watchContext from "../context/watch";

const useWatchContext = () => {
  return useContext(watchContext);
};

export default useWatchContext;
