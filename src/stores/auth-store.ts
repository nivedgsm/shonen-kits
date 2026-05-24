import { create } from 'zustand';

type User = {
  id: string;
  email: string;
  role: string;
};

type AuthStore = {
  user: User | null;

  accessToken: string | null;

  isAuthenticated: boolean;

  loading: boolean;

  hydrated: boolean;

  setAuth: (data: {
    user: User;
    accessToken: string;
  }) => void;

  setLoading: (
    loading: boolean,
  ) => void;

  setHydrated: (
    hydrated: boolean,
  ) => void;

  logout: () => void;
};

export const useAuthStore =
  create<AuthStore>((set) => ({
    user: null,

    accessToken: null,

    isAuthenticated: false,

    loading: false,

    hydrated: false,

    setAuth: ({
      user,
      accessToken,
    }) => {
      localStorage.setItem(
        'accessToken',
        accessToken,
      );

      set({
        user,
        accessToken,
        isAuthenticated: true,
        loading: false,
        hydrated: true,
      });
    },

    setLoading: (loading) => {
      set({ loading });
    },

    setHydrated: (hydrated) => {
      set({ hydrated });
    },

    logout: () => {
      localStorage.removeItem(
        'accessToken',
      );

      set({
        user: null,
        accessToken: null,
        isAuthenticated: false,
        loading: false,
        hydrated: true,
      });
    },
  }));