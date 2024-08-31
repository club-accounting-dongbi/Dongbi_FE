// api.ts

import {
  isTokenExpired,
  renewAccessToken,
  getAccessToken,
} from './auth/authService';

interface MakeApiCallOptions extends RequestInit {
  skipTokenCheck?: boolean; // 이 옵션을 추가하여 토큰 갱신을 스킵할지 여부를 설정합니다.
}

export const api = async (
  url: string,
  options: MakeApiCallOptions = {},
): Promise<Response> => {
  const { skipTokenCheck, ...restOptions } = options;

  // skipTokenCheck 옵션이 없거나 false인 경우에만 토큰 갱신 로직을 수행합니다.
  if (!skipTokenCheck && isTokenExpired()) {
    await renewAccessToken();
  }

  const token = getAccessToken();

  if (token) {
    restOptions.headers = {
      ...restOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  const response = await fetch(url, restOptions);

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }

  return response;
};
