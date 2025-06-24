import { create } from "zustand";
import { AuthState } from "../interfaces/auth";
import { persist } from "zustand/middleware";

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      setIsAuthenticated: (value: boolean) => set({ isAuthenticated: value }),
      token: null,
      setToken: (value: string) => set({ token: value }),
      verifyEmail: null,
      setVerifyEmail: (value: string) => set({ verifyEmail: value }),
    }),
    {
      name: "bcu-auth-storage",
    }
  )
);