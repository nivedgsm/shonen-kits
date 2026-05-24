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
    setHydrated,
  } = useAuthStore();

  useEffect(() => {
    const initializeAuth =
      async () => {
        try {
          const token =
            localStorage.getItem(
              'accessToken',
            );

          if (!token) {
            setHydrated(true);

            return;
          }

          const user =
            await authService.getMe();

          setAuth({
            user,
            accessToken: token,
          });
        } catch (error) {
          console.error(error);

          logout();
        } finally {
          setHydrated(true);
        }
      };

    initializeAuth();
  }, [
    logout,
    setAuth,
    setHydrated,
  ]);

  return <>{children}</>;
}