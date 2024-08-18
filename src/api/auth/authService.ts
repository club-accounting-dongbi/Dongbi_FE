import getCookieValue from '../../utils/cookieUtils'; // 유틸리티 함수 임포트

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

// RefreshToken을 쿠키에서 가져오기
export const getRefreshToken = (): string | null => {
  const name = 'refreshToken=';
  const decodedCookie = decodeURIComponent(document.cookie);
  const cookies = decodedCookie.split(';');
  for (let i = 0; i < cookies.length; i++) {
    let cookie = cookies[i];
    while (cookie.charAt(0) === ' ') {
      cookie = cookie.substring(1);
    }
    if (cookie.indexOf(name) === 0) {
      return cookie.substring(name.length, cookie.length);
    }
  }
  return null;
};

// RefreshToken을 쿠키에 저장하기
export const setRefreshToken = (token: string): void => {
  document.cookie = `refreshToken=${token}; path=/; secure; HttpOnly; max-age=${60 * 60 * 24 * 7}`; // 7일 동안 유효
};

// RefreshToken을 쿠키에서 제거하기
export const removeRefreshTowkn = () => {
  document.cookie = `refreshToken=; path=/; secure; HttpOnly; max-age=0`;
};

export const renewAccessToken = async (): Promise<string | null> => {
  const refreshToken = getRefreshToken();
  if (!refreshToken) {
    throw new Error('Refresh token not found');
  }
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/auth/refresh`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ refreshToken }),
    },
  );
  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }
  const result = await response.json();
  const { accessToken, newRefreshToken } = result;
  setAccessToken(accessToken);
  setRefreshToken(newRefreshToken);
  return accessToken;
};
