import { useStore } from '@/src/store';
import { saveToken, setAccessToken } from './authService';
import { api } from '../api';

export interface LoginParams {
  email: string;
  password: string;
}

export const login = async (payload: LoginParams) => {
  const response = await api(`${process.env.NEXT_PUBLIC_API_URL}/auth/login`, {
    method: 'POST',
    skipTokenCheck: true,
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }
  const responseData = await response.json();
  const { setClubId } = useStore.getState();
  setClubId(responseData.clubId);

  const accessToken = response.headers.get('Authorization');
  if (accessToken) {
    saveToken(accessToken);
  }
};
