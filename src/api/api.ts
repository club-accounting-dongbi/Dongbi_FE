// apiClient.ts

import { getAccessToken } from './auth/authService';

const fetchWithAuth = async (
  url: string,
  options: RequestInit = {},
): Promise<Response> => {
  const accessToken = getAccessToken();

  // Authorization 헤더에 액세스 토큰 추가
  if (accessToken) {
    options.headers = {
      ...options.headers,
      Authorization: `Bearer ${accessToken}`,
    };
  }

  let response = await fetch(url, options);

  // 액세스 토큰이 만료된 경우 토큰 갱신 시도
  if (response.status === 401) {
    try {
      // 새로운 액세스 토큰을 얻기 위해 갱신
      const newAccessToken = await refreshToken();

      // 갱신된 액세스 토큰으로 요청 재시도
      options.headers = {
        ...options.headers,
        Authorization: `Bearer ${newAccessToken}`,
      };
      response = await fetch(url, options);
    } catch (error) {
      console.error('Token refresh failed:', error);
      throw new Error('Authentication failed');
    }
  }

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }

  return response;
};
function refreshToken() {
  throw new Error('Function not implemented.');
}
