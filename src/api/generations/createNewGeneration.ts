import { useStore } from '@/src/store';
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

export interface getGenerationMemberListParams {
  clubId: number;
  generationNum: string;
}

export const getGenerationMemberList = async (
  payload: getGenerationMemberListParams,
) => {
  const token = getAccessToken();
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/generations/members/${payload?.clubId}/${payload?.generationNum}`,
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
  name: string;
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
  const data = await response.json();
  const { setClubGeneration, setMemberList, setStartDate, setEndDate } =
    useStore.getState();
  setClubGeneration(payload.generationNum);
  setMemberList(data?.members.map((el: any) => el.name));
  setStartDate(data?.startDate);
  setEndDate(data?.endDate);

  return data;
};
