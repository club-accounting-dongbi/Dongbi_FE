'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { signup, SignupData } from '@/src/api/auth/signup';

import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import CommonButton from '@/src/components/common/CommonButton';
import InputArea from './components/InputArea';

const SignupStep1 = () => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [data, setData] = useState<SignupData>({
    clubname: '',
    email: '',
    verifyNumber: '',
    password: '',
    password2: '',
  });
  const [loading, setLoading] = useState(false);
  const emailRegEx =
    /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/i;
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*?_]).{8,20}$/;

  const router = useRouter();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSignup = async (
    e?: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>,
  ) => {
    if (e && (e as React.FormEvent<HTMLFormElement>).preventDefault) {
      (e as React.FormEvent<HTMLFormElement>).preventDefault(); // 폼의 기본 동작(새로고침) 방지
    }
    if (
      !data.email ||
      emailRegEx.test(data.email) === false ||
      !data.password ||
      passwordRegEx.test(data.password) === false ||
      data.password !== data.password2
    ) {
      alert('입력값을 확인해주세요');
      return;
    }

    try {
      setLoading(true);
      const result = await signup(data);
      router.push('/login');
    } catch (err) {
      console.error('Signup error:', err);
    } finally {
      setLoading(false);
    }
  };

  if (!isMounted) return null;

  return (
    <div className="min-h-screen bg-custom-gradient m-auto pb-[15%] justify-center items-center flex flex-col">
      <div className="w-auto h-auto mt-[77px]">
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className="mb-[27px] text-[24px] text-primary mr-auto ml-auto">
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>

      <form
        className="w-full flex flex-col items-center"
        onSubmit={handleSignup}
      >
        <InputArea data={data} setData={setData} />
      </form>
      <CommonButton
        text="회원가입"
        bgColor="orange"
        textColor="white"
        radius="moreRounded"
        shadowColor="lightShadow"
        fontSize="sm"
        additionalClass="w-[331px] h-[45px] mt-[72px]"
        onClickEvent={handleSignup}
      />
      <div className="text-[#767676] text-13 mt-[36px]">
        이미 계정이 있으신가요?
      </div>
      <div className="text-13 font-extrabold text-custom-orange mt-[8px] cursor-pointer">
        <Link href="/login">로그인</Link>
      </div>
    </div>
  );
};

export default SignupStep1;
