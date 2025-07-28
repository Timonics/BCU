import { useEffect } from 'react';
import { useAuthStore } from '../stores/authStore';
import { showInfo } from '../utils/toast';

export const useAutoLogout = () => {
  const isAuthenticated = useAuthStore((s) => s.isAuthenticated);
  const authTimeStamp = useAuthStore((s) => s.authTimeStamp);
  const setIsAuthenticated = useAuthStore((s) => s.setIsAuthenticated);
  const setToken = useAuthStore((s) => s.setToken);
  const setVerifyEmail = useAuthStore((s) => s.setVerifyEmail);

  useEffect(() => {
    if (isAuthenticated && authTimeStamp) {
      const elapsedTime = Date.now() - authTimeStamp;
      const timeLeft = 3600000 - elapsedTime;

      if (timeLeft <= 0) {
        setIsAuthenticated(false);
        setToken(null);
        setVerifyEmail(null);
        showInfo('Login session expired');
        return;
      }

      const timer = setTimeout(() => {
        setIsAuthenticated(false);
        setToken(null);
        setVerifyEmail(null);
        showInfo('Login session expired');
      }, timeLeft);

      return () => clearTimeout(timer);
    }
  }, [isAuthenticated, authTimeStamp]);
};
