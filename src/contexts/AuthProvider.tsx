import React, { createContext, useState } from "react";
import { AppProps } from "../interfaces";
import { AuthState } from "../interfaces/auth";

export const AuthContext = createContext<AuthState | null>(null);

const AuthProvider: React.FC<AppProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(true);

  const contextValues = { isAuthenticated };
  return (
    <AuthContext.Provider value={contextValues}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;