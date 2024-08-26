import { setAccessToken } from './authService';

export interface LoginParams {
  email: string;
  password: string;
}

export const login = async (payload: LoginParams) => {
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

  const accessToken = response.headers.get('Authorization');
  if (accessToken) {
    setAccessToken(accessToken);
  }
};
