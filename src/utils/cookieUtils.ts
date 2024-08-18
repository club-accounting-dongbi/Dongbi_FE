// 쿠키 문자열에서 특정 쿠키 값을 찾는 함수
const getCookieValue = (name: string): string | null => {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
};

export default getCookieValue;
