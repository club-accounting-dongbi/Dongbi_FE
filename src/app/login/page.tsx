'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from '@/public/icon/icon_logo.svg';
import coins from '@/public/icon/icon_coins.svg';
import InputText from '@/src/components/common/InputText';
import emailIcon from '@/public/icon/icon_email.svg';
import pwdIcon from '@/public/icon/icon_pwd_gray.svg';
import Link from 'next/link';
import CommonButton from '@/src/components/common/CommonButton';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    alert(`Logging in with: ${email}, ${password}`);
  };

  return (
    <div className="min-h-screen w-72 m-auto pb-[15%] justify-center items-center flex flex-col ">
      <div>
        <Image
          src={coins}
          width={214}
          height={120}
          alt="Logo"
          className="absolute"
        />
        <Image
          src={Logo}
          width={200}
          height={100}
          alt="Logo"
          className="pt-12"
        />
      </div>
      <div className="mb-[27px] text-[24px] text-primary">
        <span>당신의 </span>
        <span className="text-[32px]  font-bold">동</span>
        <span>아리 </span>
        <span className="text-[32px]  font-bold">비</span>
        <span>서</span>
      </div>
      <form>
        <InputText
          type="email"
          variant={'orange'}
          shadow={'lg'}
          label="이메일"
          icon={<Image src={emailIcon} width={24} height={24} alt="email" />}
          additionalClass="mb-5 w-[331px] h-[45px]"
          id="email"
          value={email}
          onChange={handleEmailChange}
        />
        <InputText
          type="text"
          variant={'orange'}
          shadow={'lg'}
          label="비밀번호"
          icon={<Image src={pwdIcon} width={24} height={24} alt="pwd" />}
          additionalClass=" w-[331px] h-[45px]"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </form>

      <div className="flex justify-end mt-2 text-11 text-[#767676] pointer w-[331px]">
        <Link href={'/'}> Forgot password?</Link>
      </div>

      <CommonButton
        text="로그인"
        bgColor="orange"
        textColor="white"
        radius="moreRounded"
        shadowColor="lightShadow"
        fontSize="sm"
        additionalClass="w-[331px] h-[45px] mt-6"
        onClickEvent={handleLogin}
      />
    </div>
  );
};

export default Login;
