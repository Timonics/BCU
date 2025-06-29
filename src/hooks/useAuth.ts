import axios from "axios";
import {
  AdminSignInData,
  AdminSignUpData,
  LoginResponse,
} from "../interfaces/auth";
import { useLoadingStore } from "../stores/loadingStore";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

export const useAuth = () => {
  const navigate = useNavigate();
  const dbUrl = "https://bcu.candsyf.org/admin/";
  const { setIsAuthenticated, setToken, setVerifyEmail } = useAuthStore();
  const { setIsLoading } = useLoadingStore();

  const adminSignup = async (signUpData: AdminSignUpData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}signup`, signUpData);
      const registerResponse = response.data;
      setIsLoading(false);
      toast.success("Successfully registered admin");
      console.log(registerResponse);
    } catch (err: any) {
      setIsLoading(false);
      console.error("Error: ", err);
    }
  };

  const adminSignin = async (signInData: AdminSignInData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}login`, signInData);
      const loginResponse = response.data as LoginResponse;

      toast.success("Successfully logged in");
      setIsLoading(false);
      setToken(loginResponse.data.token);

      const { data } = loginResponse;
      if (data.admin.email.verified) {
        setIsAuthenticated(true);
      } else {
        setVerifyEmail(data.admin.email.value);
        navigate("../auth/verify-email");
      }
    } catch (err: any) {
      toast.error(err.message);
      setIsLoading(false);
      console.error("Error: ", err);
    }
  };

  const verifyEmail = async (verifyData: {email: string, otp: string}) => {
    try {
      await axios.post(`${dbUrl}verify-email`, verifyData);
      toast.success("Email verified successfully");
    } catch (err: any) {
      toast.error(err.message);
      setIsLoading(false);
      console.error("Error: ", err);
    }
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("bcu-auth-storage");
  };

  return {
    adminSignin,
    adminSignup,
    logout,
    verifyEmail
  };
};
