import axios from "axios";
import {
  AdminSignInData,
  AdminSignUpData,
  LoginResponse,
  // VerifyMail,
} from "../interfaces/auth";
import { useLoadingStore } from "../stores/loadingStore";
import { toast } from "react-toastify";
// import { useNavigate } from "react-router";
import { useAuthStore } from "../stores/authStore";

export const useAuth = () => {
  // const navigate = useNavigate();
  const { setIsAuthenticated, setToken } = useAuthStore();
  const dbUrl = "https://bcu.candsyf.org/admin/";
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

  // const verifyEmail = async (email: VerifyMail) => {
  //   try {
  //     const response = await axios.post(`${dbUrl}verify-email`, email);
  //   } catch (err) {
  //     console.error("Error: ", err);
  //   }
  // };

  const adminSignin = async (signInData: AdminSignInData) => {
    setIsLoading(true);
    try {
      const response = await axios.post(`${dbUrl}login`, signInData);
      const loginResponse = response.data as LoginResponse;
      toast.success("Successfully logged in");
      setIsLoading(false);

      // const { data } = loginResponse;
      // if (data.admin.email.verified) {
      //   setIsAuthenticated(true);
      // } else {

      // }
      setToken(loginResponse.data.token);
      setTimeout(() => {
        setIsAuthenticated(true);
      }, 1000);
    } catch (err: any) {
      setIsLoading(false);
      toast.error(err.message);
      console.error("Error: ", err);
    }
  };

  return {
    adminSignin,
    adminSignup,
    // verifyEmail,
  };
};
