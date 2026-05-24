'use client';

import { useEffect } from 'react';

import { authService } from '@/services/auth.service';

import { useAuthStore } from '@/stores/auth-store';

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const {
    setAuth,
    logout,
    setLoading,
  } = useAuthStore();

  useEffect(() => {
    const initializeAuth = async () => {
      try {
        const token =
          localStorage.getItem(
            'accessToken',
          );

        // no token
        if (!token) {
          setLoading(false);

          return;
        }

        // fetch current user
        const user =
          await authService.getMe();

        console.log(
          'CURRENT USER:',
          user,
        );

        // restore session
        setAuth({
          user,
          accessToken: token,
        });
      } catch (error) {
        console.error(
          'AUTH ERROR:',
          error,
        );

        logout();
      } finally {
        setLoading(false);
      }
    };

    initializeAuth();
  }, [logout, setAuth, setLoading]);

  return <>{children}</>;
}