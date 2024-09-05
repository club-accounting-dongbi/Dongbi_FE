import getCookieValue from '../../utils/cookieUtils'; // 유틸리티 함수 임포트
import { jwtDecode } from 'jwt-decode';
import { api } from '../api';

interface DecodedToken {
  exp: number;
}

// AccessToken을 로컬스토리지에서 가져오기
export const getAccessToken = (): string | null => {
  return localStorage.getItem('accessToken');
};

// AccessToekn을 로컬스토리지에 저장하기
export const setAccessToken = (token: string): void => {
  localStorage.setItem('accessToken', token);
};

// AccesesToken을 로컬스토리지에서 제거하기
export const removeAccessToken = (): void => {
  localStorage.removeItem('accessToken');
};

// RefreshToken을 쿠키에 저장하기
export const setRefreshToken = (token: string): void => {
  document.cookie = `refreshToken=${token}; path=/; secure; HttpOnly; max-age=${60 * 60 * 24 * 7}`; // 7일 동안 유효
};

// RefreshToken을 쿠키에서 제거하기
export const removeRefreshTowkn = () => {
  document.cookie = `refreshToken=; path=/; secure; HttpOnly; max-age=0`;
};

export const saveToken = (token: string) => {
  const expiresAt = calculateExpiresAt(token);
  localStorage.setItem('accessToken', token);
  localStorage.setItem('expiresAt', expiresAt.toString());
};

const calculateExpiresAt = (token: string) => {
  try {
    const decoded = jwtDecode<DecodedToken>(token);
    return decoded.exp * 1000; // Expiration time in milliseconds
  } catch (error) {
    console.error('Failed to decode token:', error);
    return 0;
  }
};

export const renewAccessToken = async (): Promise<string | null> => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // 쿠키를 포함시키기 위한 옵션
      },
    );
    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to refresh token: ${errorText}`);
    }
    const result = await response.json();
    const { accessToken } = result;

    setAccessToken(accessToken);
    return result;
  } catch (error) {
    console.error('Failed to renew access token:', error);
    throw error;
  }
};
