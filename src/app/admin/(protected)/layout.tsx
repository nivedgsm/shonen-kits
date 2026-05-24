'use client';

import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import { useAuthStore } from '@/stores/auth-store';

export default function ProtectedAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const {
    user,
    isAuthenticated,
    hydrated,
  } = useAuthStore();

  useEffect(() => {
    if (!hydrated) return;

    // not logged in
    if (!isAuthenticated) {
      router.replace('/admin/login');

      return;
    }

    // logged in but not admin
    if (
      user &&
      user.role !== 'ADMIN'
    ) {
      router.replace('/');

      return;
    }
  }, [
    user,
    isAuthenticated,
    hydrated,
    router,
  ]);

  // wait for hydration
  if (!hydrated) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-black text-white">
        Loading...
      </div>
    );
  }

  // prevent flash
  if (!isAuthenticated) {
    return null;
  }

  // prevent flash
  if (user?.role !== 'ADMIN') {
    return null;
  }

  return (
    <div className="min-h-screen bg-black text-white">
      {children}
    </div>
  );
}