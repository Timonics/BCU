import { useContext } from "react";
import { StateContext } from "../contexts/StateProvider";

const useStates = () => {
  const context = useContext(StateContext);
  if (!context) {
    throw new Error("context must be provided with StateProvider");
  }
  return context;
};

export default useStates;
