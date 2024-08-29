import { api } from '../api';

export interface SignupData {
  email: string;
}

export const postEmail = async (data: SignupData) => {
  try {
    const response = await api('/email/send', {
      method: 'POST',
      skipTokenCheck: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!response.ok) {
      throw new Error('Failed to sign up');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during signup:', error);
    throw error;
  }
};
