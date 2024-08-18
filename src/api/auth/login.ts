export interface LoginData {
  email: string;
  password: string;
}

// API 응답 타입을 정의합니다.
interface AuthResponse {
  accessToken: string;
  refreshToken: string;
}

export const login = async (payload: LoginData) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }
  const result: AuthResponse = await response.json();

  return result;
};
