import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("context must be provided with AuthProvider");
  }
  return context;
};

export default useAuth;
