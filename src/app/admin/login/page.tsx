'use client';

import { useState } from 'react';

import { useRouter } from 'next/navigation';

import { authService } from '@/services/auth.service';

import { useAuthStore } from '@/stores/auth-store';

export default function AdminLoginPage() {
  const router = useRouter();

  const { setAuth } = useAuthStore();

  const [email, setEmail] = useState('');

  const [password, setPassword] =
    useState('');

  const [loading, setLoading] =
    useState(false);

  const handleLogin = async () => {
    try {
      setLoading(true);

      const data =
        await authService.login({
          email,
          password,
        });

      setAuth(data);

      router.replace('/admin/dashboard');
    } catch (error) {
      console.error(error);

      alert('Invalid credentials');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-black text-white">
      <div className="w-full max-w-md rounded-2xl border border-white/10 bg-zinc-900 p-8">
        <h1 className="mb-6 text-3xl font-bold">
          Admin Login
        </h1>

        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(e.target.value)
            }
            className="w-full rounded-lg border border-white/10 bg-zinc-800 p-3 outline-none"
          />

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full rounded-lg bg-white p-3 font-semibold text-black"
          >
            {loading
              ? 'Logging in...'
              : 'Login'}
          </button>
        </div>
      </div>
    </div>
  );
}