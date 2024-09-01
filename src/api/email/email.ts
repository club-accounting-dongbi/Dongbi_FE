export const emailSend = async (email: string) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/email/send?mail=${email}`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to send email');
    }
    const result = await response.json();
    if (result?.success === true) {
      alert('이메일이 발송되었습니다.');
      return result?.number;
    }
  } catch (error) {
    console.error('Error during postEmail:', error);
    throw error;
  }
};

export interface emailCheckParams {
  email: string;
  verifyNumberInput: string | undefined;
}

export const emailCheck = async ({
  email,
  verifyNumberInput,
}: emailCheckParams) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/email/check?mail=${email}&otp=${verifyNumberInput}`,
      {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      },
    );

    if (!response.ok) {
      throw new Error('Failed to get email check');
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error during EmailCheck:', error);
    throw error;
  }
};
