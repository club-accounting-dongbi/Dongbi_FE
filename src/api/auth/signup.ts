import { api } from '../api';

export interface SignupData {
  clubname: string;
  email: string;
  verifyNumber: string;
  password: string;
  password2: string;
}

export const signup = async (payload: SignupData) => {
  const response = await api(`${process.env.NEXT_PUBLIC_API_URL}/auth/signup`, {
    method: 'POST',
    skipTokenCheck: true,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }

  return response.json();
};
