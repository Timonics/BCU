export interface AuthState {
  isAuthenticated: boolean;
  adminSignUp: (adminData: AdminSignUpData) => Promise<void>;
  adminSignIn: (adminData: AdminSignInData) => Promise<void>;
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
