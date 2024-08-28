import { useStore } from '@/src/store';
import { setAccessToken } from './authService';

export interface LoginData {
  email: string;
  password: string;
}

export const login = async (payload: LoginData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }
  const responseData = await response.json();
  const { setClubId } = useStore.getState();
  setClubId(responseData.clubId);

  const accessToken = response.headers.get('Authorization');
  if (accessToken) {
    setAccessToken(accessToken);
  }
};
