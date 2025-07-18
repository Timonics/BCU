import { create } from "zustand";
import { AuthState } from "../interfaces/auth";
import { persist } from "zustand/middleware";

interface ExtendedAuthState extends AuthState {
  authTimeStamp?: number;
}

const AUTH_EXPIRATION_TIME = 3600000;

export const useAuthStore = create<ExtendedAuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      authTimeStamp: undefined,
      setIsAuthenticated: (value: boolean) =>
        set({
          isAuthenticated: value,
          authTimeStamp: value  ? Date.now() : undefined,
        }),
      token: null,
      setToken: (value: string) => set({ token: value }),
      verifyEmail: null,
      setVerifyEmail: (value: string) => set({ verifyEmail: value }),
    }),
    {
      name: "bcu-auth-storage",
      onRehydrateStorage: () => (state) => {
        if (state) {
          const currentTime = Date.now();
          if (
            state.isAuthenticated &&
            state.authTimeStamp &&
            currentTime - state.authTimeStamp > AUTH_EXPIRATION_TIME
          ) {
            state.isAuthenticated = false;
            state.authTimeStamp = undefined;
          }
        }
      },
    }
  )
);
