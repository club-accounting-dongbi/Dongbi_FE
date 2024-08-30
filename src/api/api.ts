// api.ts

import { renewAccessToken, getAccessToken } from './auth/authService';

interface MakeApiCallOptions extends RequestInit {
  skipTokenCheck?: boolean; // 이 옵션을 추가하여 토큰 갱신을 스킵할지 여부를 설정합니다.
}

export const api = async (
  url: string,
  options: MakeApiCallOptions = {},
): Promise<Response> => {
  const { skipTokenCheck, ...restOptions } = options;

  // skipTokenCheck 옵션이 없거나 false인 경우에만 토큰 갱신 로직을 수행합니다.

  if (!skipTokenCheck) {
    const token = getAccessToken();
    restOptions.headers = {
      ...restOptions.headers,
      Authorization: `Bearer ${token}`,
    };
  }

  let response = await fetch(url, restOptions);

  if (!response.ok) {
    const errorText = await response.text();
    const errorJson = JSON.parse(errorText);
    if (errorJson.message === '토큰이 만료되었습니다. 재발급 받아주세요.') {
      try {
        // 토큰 갱신 후 원래 요청을 다시 시도
        await renewAccessToken();

        // 토큰 재발급 성공 후, 원래 요청을 다시 시도
        const newToken = getAccessToken(); // 새 토큰 가져오기
        if (newToken) {
          restOptions.headers = {
            ...restOptions.headers,
            Authorization: `Bearer ${newToken}`,
          };
        }

        // 원래 요청 재시도
        response = await fetch(url, restOptions);
      } catch (error) {
        console.error('토큰 재발급 실패:', error);
        throw error;
      }
    }
    throw new Error(`Error: ${response.status} ${errorText}`);
  }

  return response;
};
