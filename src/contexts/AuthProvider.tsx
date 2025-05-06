import React, { createContext, useState } from "react";
import { AppProps } from "../interfaces";
import {
  AdminSignInData,
  AdminSignUpData,
  AuthState,
} from "../interfaces/auth";
//import axios from "axios";

export const AuthContext = createContext<AuthState | null>(null);

const AuthProvider: React.FC<AppProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  const adminSignUp = async (adminData: AdminSignUpData) => {
    console.log(adminData);
  };

  const adminSignIn = async (adminData: AdminSignInData) => {
    console.log(adminData);
    try {
      //const response = await axios.post("", adminData);

      //const responseData = response.data
      setIsAuthenticated(true);
    } catch (err) {
      console.error("Error Occurred: ", err);
    }
  };

  const contextValues = {
    isAuthenticated,
    adminSignUp,
    adminSignIn,
    setIsAuthenticated,
  };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
