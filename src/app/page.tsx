'use client';
import Image from 'next/image';
import InputText from '../components/common/InputText';
import email from '../../public/icon/icon_email.svg';
import pwd from '../../public/icon/icon_pwd.svg';
import Checkbox from '../components/common/Checkbox';
import CommonButton from '../components/common/CommonButton';
import CommonModal from '../components/common/CommonModal';
import { useState } from 'react';

export default function Home() {
  const [isChecked, setIsChecked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(event.target.checked);
  };
  return (
    <>
      {toggle && (
        <CommonModal
          setToggle={setToggle}
          goBack={true}
          content={<div>모달입니다.</div>}
        />
      )}
      <main className="flex min-h-screen flex-col items-center p-24 gap-4">
        <h1>Common InputText</h1>
        <InputText
          type="text"
          id="email"
          value="email"
          variant={'orange'}
          shadow={'lg'}
          label="이메일"
          icon={<Image src={email} width={24} height={24} alt="email" />}
        />
        <InputText
          type="text"
          id="id"
          value="id"
          variant={'default'}
          shadow={'default'}
          label="아이디 입력"
          icon={<Image src={pwd} width={12} height={12} alt="icon" />}
        />
        <h1>Common Checkbox</h1>
        <Checkbox
          isDisabled={false}
          isChecked={isChecked}
          onChange={handleCheckboxChange}
        />
        <CommonButton
          text="Button 1"
          bgColor="orange"
          textColor="white"
          radius="moreRounded"
          shadowColor="lightShadow"
          fontSize="lg"
          additionalClass="w-[197px] h-[45px] "
          onClickEvent={() => {
            setButtonClicked(!buttonClicked);
            alert(`buttonClicked : ${buttonClicked}\n버튼이 클릭되었습니다`);
          }}
        />
        <CommonButton
          text="Button 2"
          bgColor="white"
          textColor="black"
          radius="moreRounded"
          shadowColor="lightShadow"
          borderColor="lightBorder"
          fontSize="lg"
          additionalClass="w-[197px] h-[45px]"
          onClickEvent={() => {
            setButtonClicked(!buttonClicked);
            alert(`buttonClicked : ${buttonClicked}\n버튼이 클릭되었습니다`);
          }}
        />
        <CommonButton
          text="Button 3"
          bgColor="orange"
          textColor="white"
          radius="moreRounded"
          shadowColor="lightShadow"
          fontSize="sm"
          additionalClass="w-[71px] h-[36px]"
          onClickEvent={() => {
            setButtonClicked(!buttonClicked);
            alert(`buttonClicked : ${buttonClicked}\n버튼이 클릭되었습니다`);
          }}
        />
        <CommonButton
          text="Button 4"
          bgColor="white"
          textColor="black"
          radius="moreRounded"
          shadowColor="lightShadow"
          borderColor="lightBorder"
          fontSize="sm"
          additionalClass="w-[71px] h-[36px] "
          onClickEvent={() => {
            setButtonClicked(!buttonClicked);
            alert(`buttonClicked : ${buttonClicked}\n버튼이 클릭되었습니다`);
          }}
        />
        <h1 onClick={() => setToggle(true)}>모달 열기</h1>
      </main>
    </>
  );
}
