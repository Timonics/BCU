import { useContext } from "react";
import { AuthContext } from "../contexts/AuthProvider";

const useAuth = () => {
  //useContext hook is used to consume the context
  //The context is the value provided by the AuthProvider
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("context must be provided with AuthProvider");
  }
  return context;
};

export default useAuth;
