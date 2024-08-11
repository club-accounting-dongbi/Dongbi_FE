'use client';
import Image from 'next/image';
import React, { useState } from 'react';
import Header from '@/src/app/shared/Header';
import InputText from '@/src/components/common/InputText';
import user from '@/public/icon/icon_user.svg';
import CommonButton from '@/src/components/common/CommonButton';
import Pwd from '@/src/components/IconComponents/IconPwd';
import Email from '@/src/components/IconComponents/IconEmail';
import IconWarning from '@/src/components/IconComponents/IconWarning';
import CommonModal from '@/src/components/common/CommonModal';
import withdraw from '@/public/icon/icon_withdraw.svg';
import { useRouter } from 'next/navigation';

const page = () => {
  const [toggle, setToggle] = useState(false);
  const router = useRouter();
  const [formValues, setFormValues] = useState({
    clubName: '',
    prevPwd: '',
    newPwd: '',
    checkPwd: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormValues({
      ...formValues,
      [id]: value,
    });
  };

  const handleWithDraw = () => {
    alert('탈퇴 완료');
    router.push('/login');
  };

  return (
    <div className="bg-gradient-to-b from-[#FFEDE3] from-5% via-[#FFFCF6] via-20% to-white to-75% min-w-[800px]">
      <div className=" min-h-screen w-[768px] m-auto pb-[15%] items-center flex flex-col ">
        <Header />
        <div className="w-full pt-[120px]">
          <div className="flex items-center pl-6 justify-between">
            <div className="w-[115px] font-bold">동아리 이름</div>
            <div className="flex gap-[90px]">
              <InputText
                type="text"
                id="clubName"
                value={formValues.clubName}
                variant={'default'}
                shadow={'default'}
                label="동아리 이름"
                icon={<Image src={user} width={16} height={16} alt="icon" />}
                additionalClass="w-[331px]"
                onChange={handleChange}
              />
              <CommonButton
                text="변경하기"
                bgColor="orange"
                textColor="white"
                radius="lessRounded"
                shadowColor="lightShadow"
                fontSize="sm"
                additionalClass="w-[127px] h-[49px] "
                onClickEvent={() => {
                  alert(`buttonClicked : 버튼이 클릭되었습니다`);
                }}
              />
            </div>
          </div>
          <div className="w-full flex items-start justify-between pl-6 pt-[42px] ">
            <div className="w-[115px] pt-4 font-bold">비밀번호 변경</div>
            <div className="flex flex-col gap-[17px]">
              <InputText
                type="text"
                id="prevPwd"
                value={formValues.prevPwd}
                variant={'default'}
                shadow={'default'}
                label="기존 비밀번호"
                icon={
                  <Pwd className="icon w-[16px] h-[16px] fill-none text-black" />
                }
                additionalClass="w-[331px]"
                onChange={handleChange}
              />
              <InputText
                type="text"
                id="newPwd"
                value={formValues.newPwd}
                variant={'default'}
                shadow={'default'}
                label="새 비밀번호"
                icon={
                  <Pwd className="icon w-[16px] h-[16px] fill-none text-black" />
                }
                additionalClass="w-[331px]"
                onChange={handleChange}
              />
              <div className="flex gap-[90px]">
                <div className=" relative">
                  <InputText
                    type="text"
                    id="checkPwd"
                    value={formValues.checkPwd}
                    variant={'default'}
                    shadow={'default'}
                    label="새 비밀번호 확인"
                    icon={
                      <Pwd className="icon w-[16px] h-[16px] fill-none text-black" />
                    }
                    additionalClass="w-[331px]"
                    onChange={handleChange}
                  />
                  <div className="absolute right-2 top-0 h-full flex justify-center items-center">
                    <IconWarning className="w-[20px] h-[20px]" />
                  </div>
                </div>

                <CommonButton
                  text="변경하기"
                  bgColor="orange"
                  textColor="white"
                  radius="lessRounded"
                  shadowColor="lightShadow"
                  fontSize="sm"
                  additionalClass="w-[127px] h-[49px] "
                  onClickEvent={() => {
                    alert(`buttonClicked : 버튼이 클릭되었습니다`);
                  }}
                />
              </div>
            </div>
          </div>
          <div className="w-full flex items-start justify-between pl-6 pt-[89px] ">
            <div className="w-[115px] pt-4 font-bold">이메일 변경</div>
            <div className="flex flex-col gap-[17px]">
              <div className="flex gap-[90px]">
                <div className="relative  ">
                  <InputText
                    type="text"
                    id="checkPwd"
                    value={formValues.checkPwd}
                    variant={'default'}
                    shadow={'default'}
                    label="기존 이메일 주소"
                    icon={
                      <Email className="icon w-[16px] h-[16px] fill-none text-custom-gray" />
                    }
                    disable={true}
                    additionalClass="w-[331px] cursor-not-allowed bg-gray-200"
                    onChange={handleChange}
                  />
                  <div className="absolute right-2 top-0 h-full text-[14px] flex justify-center items-center">
                    <Pwd className="icon w-[16px] h-[16px] fill-non text-custom-gray" />
                  </div>
                </div>
                <CommonButton
                  text="변경하기"
                  bgColor="orange"
                  textColor="white"
                  radius="lessRounded"
                  shadowColor="lightShadow"
                  fontSize="sm"
                  additionalClass="w-[127px] h-[49px] "
                  onClickEvent={() => {
                    alert(`buttonClicked : 버튼이 클릭되었습니다`);
                  }}
                />
              </div>
              <div className="relative w-[331px]">
                <InputText
                  type="text"
                  id="prevPwd"
                  value={formValues.prevPwd}
                  variant={'default'}
                  shadow={'default'}
                  label="새 이메일 주소"
                  icon={
                    <Email className="icon w-[16px] h-[16px] fill-none text-black" />
                  }
                  additionalClass="w-[331px]"
                  onChange={handleChange}
                />
                <button className="absolute right-2 top-0 h-full text-[14px] text-custom-gray-4">
                  인증
                </button>
              </div>
              <div className="relative w-[331px]">
                <InputText
                  type="text"
                  id="prevPwd"
                  value={formValues.prevPwd}
                  variant={'default'}
                  shadow={'default'}
                  label="인증 번호"
                  icon={
                    <Email className="icon w-[16px] h-[16px] fill-none text-black" />
                  }
                  additionalClass="w-[331px]"
                  onChange={handleChange}
                />

                <div className="absolute right-2 top-0 h-full  flex justify-center items-center">
                  <div className="w-[14px] h-[14px] rounded-full bg-no-repeat bg-square-check-yes bg-center"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-end w-full pt-[66px]">
            <button
              className="text-[#8E8E93] text-[20px]"
              onClick={() => {
                setToggle(true);
              }}
            >
              회원 탈퇴
            </button>
            {toggle && (
              <CommonModal
                setToggle={setToggle}
                goBack={false}
                close={false}
                content={
                  <div className="flex flex-col items-center">
                    <Image src={withdraw} alt="withdraw" width={39} />
                    <div className="flex flex-col items-center text-[24px] leading-8 mt-[22px]">
                      <span>정말 탈퇴하시겠습니까?</span>
                      <span>탈퇴하시면 입력하신 모든 데이터도 삭제됩니다.</span>
                    </div>
                    <div className="flex gap-[18px] mt-[84px]">
                      <CommonButton
                        text="취소"
                        bgColor="white"
                        textColor="black"
                        radius="lessRounded"
                        shadowColor="lightShadow"
                        borderColor="lightBorder"
                        fontSize="sm"
                        additionalClass="w-[249px] h-[62px]"
                        onClickEvent={() => {
                          setToggle(false);
                        }}
                      />
                      <CommonButton
                        text="회원 탈퇴"
                        bgColor="orange"
                        textColor="white"
                        radius="lessRounded"
                        shadowColor="mediumShadow"
                        fontSize="sm"
                        additionalClass="w-[249px] h-[62px]"
                        onClickEvent={handleWithDraw}
                      />
                    </div>
                  </div>
                }
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
