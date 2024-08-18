'use client';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { cookies } from 'next/headers';
import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import InputText from '@/src/components/common/InputText';
import Email from '@/src/components/IconComponents/IconEmail';
import Pwd from '@/src/components/IconComponents/IconPwd';
import Link from 'next/link';
import CommonButton from '@/src/components/common/CommonButton';
import { useRouter } from 'next/navigation';
import { login, LoginData } from '@/src/api/auth/login';
import { setAccessToken, setRefreshToken } from '@/src/api/auth/authService';

const Login = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [data, setData] = useState<LoginData>({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  if (!isMounted) return null;

  const handleLogin = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (e && (e as React.FormEvent<HTMLFormElement>).preventDefault) {
      (e as React.FormEvent<HTMLFormElement>).preventDefault(); // 폼의 기본 동작(새로고침) 방지
    }
    if (
      !data.email ||
      emailRegEx.test(data.email) === false ||
      !data.password
    ) {
      alert('입력값을 확인해주세요');
      return;
    }

    try {
      setLoading(true);
      const response = await login(data);
      const { accessToken, refreshToken } = response;
      setAccessToken(accessToken);
      setRefreshToken(refreshToken);

      router.push('/home');
    } catch (err) {
      console.error('Login error:', err);
      alert('로그인에 실패하였습니다');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-gradient-to-b from-[#FFEDE3] from-5% via-[#FFFCF6] via-20% to-white to-75% min-h-screen w-full m-auto pb-[15%] justify-center items-center flex flex-col ">
      <div className="w-auto h-auto mt-[77px]">
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className="mb-[27px] text-[24px] text-primary mr-auto ml-auto">
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>
      <form onSubmit={handleLogin}>
        <InputText
          type="email"
          id="email"
          name="email"
          variant={'orange'}
          shadow={'lg'}
          label="이메일"
          icon={
            <Email className="icon w-[20px] h-[20px] fill-none text-custom-gray-2" />
          }
          additionalClass="mb-5 w-[331px] h-[45px]"
          onChange={handleChange}
        />
        <InputText
          type="password"
          id="password"
          name="password"
          variant={'orange'}
          shadow={'lg'}
          label="비밀번호"
          icon={
            <Pwd className="icon w-[20px] h-[20px] fill-none text-custom-gray-2" />
          }
          additionalClass=" w-[331px] h-[45px]"
          onChange={handleChange}
        />
        <div className="flex justify-end mt-2 text-11 text-[#767676] pointer w-[331px]">
          <Link href={'/'}> Forgot password?</Link>
        </div>

        <CommonButton
          buttonType="submit"
          text="로그인"
          bgColor="orange"
          textColor="white"
          radius="moreRounded"
          shadowColor="lightShadow"
          fontSize="sm"
          additionalClass="w-[331px] h-[45px] mt-6"
          onClickEvent={handleLogin}
        />
      </form>

      <CommonButton
        text="회원가입"
        bgColor="orange"
        textColor="white"
        radius="moreRounded"
        shadowColor="lightShadow"
        fontSize="sm"
        additionalClass="w-[331px] h-[45px] mt-6"
        onClickEvent={() => router.push('/signup')}
      />
    </div>
  );
};

export default Login;
