'use client';
import React, { useState } from 'react';
import { cva } from 'class-variance-authority';
import Image from 'next/image';
import MemberCheckbox from './MemberCheckbox';
import CommonButton from '@/src/components/common/CommonButton';
import Dot from '@/public/icon/icon_dot.svg';

interface AddMemberProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  memberList: string[];
  setMemberList: React.Dispatch<React.SetStateAction<string[]>>;
  checkedMemberList: string[];
  setCheckedMemberList: React.Dispatch<React.SetStateAction<string[]>>;
}

const AddMemberContainer = 'w-[654px] flex flex-col items-center';
const ModalTitle = 'text-40 text-custom-black mt-[70px]';
const OrderButtonArea = 'flex flex-row ml-[auto]';
const DotContainer = 'flex justify-center w-full mb-[4px]';
const MemberListArea =
  'content-start grid grid-cols-2 gap-10 mt-[108px] mb-[108px]';

const OrderButtonStyles = cva('text-20 mr-[26px] mt-auto cursor-pointer', {
  variants: {
    active: {
      true: 'text-custom-orange',
      false: 'text-custom-black',
    },
  },
  defaultVariants: {
    active: false,
  },
});

const AddMember: React.FC<AddMemberProps> = ({
  setStep,
  memberList,
  setMemberList,
  checkedMemberList,
  setCheckedMemberList,
}) => {
  const [order, setOrder] = useState<string>('이름 순');

  const handleCheckboxChange = (member: string, isChecked: boolean) => {
    if (isChecked) {
      setCheckedMemberList([...checkedMemberList, member]);
    } else {
      setCheckedMemberList(checkedMemberList.filter((item) => item !== member));
    }
  };
  return (
    <div className={AddMemberContainer}>
      <div className={ModalTitle}>입금자 선택</div>
      <div className={OrderButtonArea}>
        {['이름 순', '숫자 순'].map((el, index) => (
          <div
            key={index}
            className={OrderButtonStyles({ active: order === el })}
            onClick={() => setOrder(el)}
          >
            {order === el && (
              <div className={DotContainer}>
                <Image src={Dot} width={7} height={7} alt={el} />
              </div>
            )}
            {el}
          </div>
        ))}
      </div>

      <div className={MemberListArea}>
        {memberList?.map((el, index) => (
          <MemberCheckbox
            member={el}
            isDisabled={false}
            isChecked={checkedMemberList.includes(el)}
            onChangeHandler={(event: React.ChangeEvent<HTMLInputElement>) => {
              handleCheckboxChange(el, event.target.checked);
            }}
          />
        ))}
      </div>

      <CommonButton
        text={'등록'}
        bgColor={'orange'}
        textColor={'white'}
        radius={'moreRounded'}
        shadowColor={'lightShadow'}
        fontSize={'lg'}
        additionalClass="w-[197px] h-[45px] ml-[13.5px]"
        onClickEvent={() => setStep(0)}
      />
    </div>
  );
};

export default AddMember;
