import axios from 'axios';
import {
  AdminSignInData,
  AdminSignUpData,
  AuthResponse,
} from '../interfaces/auth';
import { useLoadingStore } from '../stores/loadingStore';
import { toast } from 'react-toastify';
import { useAuthStore } from '../stores/authStore';
import { url } from '../utils/db_url';

export const useAuth = () => {
  const dbUrl = `${url}auth/`;
  const { setIsAuthenticated, setToken } = useAuthStore();
  const { setIsLoading } = useLoadingStore();

  const adminSignup = async (signUpData: AdminSignUpData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}register`, signUpData);
      const registerResponse = response.data as AuthResponse;

      setToken(registerResponse.data.access_token);

      toast.success('Successfully registered admin');
    } catch (err: any) {
      toast.error('Error registering admin');
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const adminSignin = async (signInData: AdminSignInData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}login`, signInData);
      const loginResponse = response.data as AuthResponse;

      setToken(loginResponse.data.access_token);

      setIsAuthenticated(true);
      toast.success('Successfully logged in');
    } catch (err: any) {
      toast.error(
        err.response
          ? err.response.data.statusCode === 500
            ? 'Internal Server Error'
            : err.response.data.message.message
          : err.message,
      );
      console.error('Error: ', err);
    } finally {
      setIsLoading(false);
    }
  };

  const verifyEmail = async (verifyData: { email: string; otp: string }) => {
    try {
      await axios.post(`${dbUrl}verify-email`, verifyData);
      toast.success('Email verified successfully');
    } catch (err: any) {
      toast.error(err.message);
      setIsLoading(false);
      console.error('Error: ', err);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('bcu-auth-storage');
  };

  return {
    adminSignin,
    adminSignup,
    logout,
    verifyEmail,
  };
};
