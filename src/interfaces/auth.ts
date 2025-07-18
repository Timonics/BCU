export interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  token: string | null;
  setToken: (value: string) => void;
  verifyEmail: string | null;
  setVerifyEmail: (value: string) => void;
}

export interface AdminSignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface AdminSignInData {
  email: string;
  password: string;
}

export interface VerifyMail {
  email: string;
}

export interface AuthResponse {
  statusCode: number;
  message: string;
  data: {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    access_token: string;
  };
  timestamp: string;
}
