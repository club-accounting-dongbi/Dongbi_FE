import { getAccessToken } from '../auth/authService';

export interface getGenerationDataParams {
  clubId: number;
}

export const getGenerationData = async (payload: getGenerationDataParams) => {
  const token = getAccessToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/generations/num/${payload?.clubId}`,
    {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `${token}`,
      },

      credentials: 'include',
    },
  );

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Error: ${response.status} ${errorText}`);
  }

  const data = await response.json();
  return data;
};

export interface startNewGenerationParams {
  generationNum: number;
  clubId: number;
  startDate: string;
  endDate: string;
  memberNames: string[];
}

export const startNewGeneration = async (payload: startNewGenerationParams) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/generations`,
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

  console.log('response', response);
  //zustand에 기수, 명단, 활동기간 저장
};
