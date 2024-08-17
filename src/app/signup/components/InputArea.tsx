'use client';

import React from 'react';
import IconUsers from '../../../components/IconComponents/IconUsers';
import IconEmail from '../../../components/IconComponents/IconEmail';
import IconPwd from '../../../components/IconComponents/IconPwd';
import InputText from '@/src/components/common/InputText';
import { SignupData } from '@/src/api/auth/signup';

interface InputAreaProps {
  data: SignupData;
  setData: React.Dispatch<React.SetStateAction<SignupData>>;
}

const EmailInputRow = 'relative w-[331px] h-[58px]';
const VerifyButton =
  'absolute right-[10px] top-[12px] mt-[13px] text-13 text-custom-gray-3 z-50';
const InputArea = ({ data, setData }: InputAreaProps) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prev) => ({ ...prev, [name]: value }));
  };
  return (
    <>
      <InputText
        type="text"
        id="clubName"
        name="clubname" // name 속성 추가
        variant="orange"
        shadow="lg"
        label="동아리 이름"
        icon={
          <IconUsers className="icon w-[24px] h-[24px] fill-none text-custom-gray-5 group-hover:text-black" />
        }
        additionalClass="w-[331px] h-[45px] mt-[13px] flex gap-2"
        onChange={handleChange}
      />

      <div className={EmailInputRow}>
        <InputText
          type="text"
          id="email"
          name="email" // name 속성 추가
          variant="orange"
          shadow="lg"
          label="이메일"
          icon={
            <IconEmail className="icon w-[24px] h-[24px] fill-none text-custom-gray-5 group-hover:text-black" />
          }
          additionalClass="w-[331px] h-[45px] mt-[13px] flex gap-2"
          onChange={handleChange}
        />
        <button className={VerifyButton}>인증</button>
      </div>
      <InputText
        type="text"
        id="verifyNumber"
        name="verifyNumber" // name 속성 추가
        variant="orange"
        shadow="lg"
        label="인증번호"
        icon={
          <IconEmail className="icon w-[24px] h-[24px] fill-none text-custom-gray-5 group-hover:text-black" />
        }
        additionalClass="w-[331px] h-[45px] mt-[13px] flex gap-2"
        onChange={handleChange}
      />

      <InputText
        type="password"
        id="password"
        name="password" // name 속성 추가
        variant="orange"
        shadow="lg"
        label="비밀번호(영문, 숫자, 특수문자 혼합 8~20자)"
        icon={
          <IconPwd className="icon w-[24px] h-[24px] fill-none text-custom-gray-5 group-hover:text-black" />
        }
        inputStyle="w-[300px]"
        additionalClass="w-[331px] h-[45px] mt-[13px] flex gap-2"
        onChange={handleChange}
      />

      <InputText
        type="password"
        id="password2"
        name="password2" // name 속성 추가
        variant="orange"
        shadow="lg"
        label="비밀번호 확인"
        icon={
          <IconPwd className="icon w-[24px] h-[24px] fill-none text-custom-gray-5 group-hover:text-black" />
        }
        additionalClass="w-[331px] h-[45px] mt-[13px] flex gap-2"
        onChange={handleChange}
      />
    </>
  );
};

export default InputArea;
