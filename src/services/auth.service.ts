import { api } from '@/lib/api';

export const authService = {
  async login(data: {
    email: string;
    password: string;
  }) {
    const response = await api.post('/auth/login', data);

    return response.data;
  },

  async register(data: {
    name: string;
    email: string;
    password: string;
  }) {
    const response = await api.post('/auth/register', data);

    return response.data;
  },

  async getMe() {
    const response = await api.get('/auth/me');

    return response.data;
  },
};