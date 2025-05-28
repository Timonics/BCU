export interface AuthState {
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  token: string | null
  setToken: (value: string) => void
}

export interface AdminSignUpData {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AdminSignInData {
  email: string;
  password: string;
}

export interface VerifyMail {
  email: string;
}

export interface LoginResponse {
  message: string;
  data: {
    admin: {
      _id: string;
      email: {
        verified: boolean;
        value: string;
      };
      password: string;
      createdAt: string;
      updatedAt: string;
      __v: number;
    };
    token: string;
  };
}
