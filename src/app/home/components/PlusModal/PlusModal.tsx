'use client';
import React, { useState } from 'react';
import CommonButton from '@/src/components/common/CommonButton';
import MemberCheckbox from './MemberCheckbox';

const PlusModalContainer = 'flex flex-col items-center';
const ModalTitle = 'text-40 text-custom-black mt-[70px]';
const WarningText = 'text-17 mt-[34px] mb-[59px] font-500';
const DetailInputArea = 'w-[550px] flex flex-col mb-[60px]';
const DetailRow = 'flex flex-row text-20 items-center mb-[17px]';
const NoItemInput = 'flex w-[435px]  mb-[31px]';
const DetailItem = 'w-[111px] text-black';
const InputStyle =
  ' w-[321px] h-[49px] text-[17px] border-[1px] border-custom-grey-4 rounded-[4.43px] focus:ring-0 outline-none placeholder-custom-gray';

const MemberListRow = 'flex flex-row text-20 mb-[17px] items-center';
const MemberListBox =
  'content-start grid grid-cols-3 gap-4 w-[448px] min-h-[326px] bg-custom-gray-6 ml-[111px] pt-[32px] pb-[32px] pl-[30px] pr-[30px] rounded-lg';
const ButtonArea = 'flex flex-row justify-between mb-[70px] ';

interface ReceiptScanStep1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  setAddModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  memberList: string[];
  setMemberList: React.Dispatch<React.SetStateAction<string[]>>;
  checkedMemberList: string[];
  setCheckedMemberList: React.Dispatch<React.SetStateAction<string[]>>;
}
const PlusModal: React.FC<ReceiptScanStep1Props> = ({
  setStep,
  setAddModalToggle,
  memberList,
  setMemberList,
  checkedMemberList,
  setCheckedMemberList,
}) => {
  return (
    <div className={PlusModalContainer}>
      <div className={ModalTitle}>입금 등록</div>
      <div className={WarningText}>
        *지출등록은 <span className="text-[#FF3B30]">활동종료 후 7일까지</span>
        등록가능합니다.
      </div>
      <div className={DetailInputArea}>
        <div className={DetailRow}>
          <div className={DetailItem}>입금항목</div>
          <select className={InputStyle}>
            {['a', 'b', 'c'].map((el) => (
              <option value={el} key={el}>
                {el}
              </option>
            ))}
          </select>
        </div>
        <div className={NoItemInput}>
          <input
            className={InputStyle}
            style={{ marginLeft: '111px' }}
            placeholder="새 임금항목을 입력해주세요"
          />
        </div>
        <div className={DetailRow}>
          <div className={DetailItem}>금액</div>
          <input className={InputStyle} placeholder="금액을 입력해주세요" />
        </div>

        <div className={MemberListRow} style={{ marginTop: '83px' }}>
          <div className={DetailItem}>입금자명</div>
          <CommonButton
            text={'수정하기'}
            bgColor={'orange'}
            textColor={'white'}
            radius={'moreRounded'}
            shadowColor={'lightShadow'}
            fontSize={'lg'}
            additionalClass="w-[120px] h-[45px]"
            onClickEvent={() => setStep(1)}
          />
        </div>
        <div className={MemberListBox}>
          {checkedMemberList.map((el, index) => (
            <MemberCheckbox
              key={'memeber' + index}
              member={el}
              isDisabled={true}
              isChecked={true}
              onChangeHandler={() => {}}
            />
          ))}
        </div>
      </div>
      <div className={ButtonArea}>
        <CommonButton
          text={'등록'}
          bgColor={'orange'}
          textColor={'white'}
          radius={'moreRounded'}
          shadowColor={'lightShadow'}
          fontSize={'lg'}
          additionalClass="w-[197px] h-[45px] mr-[13.5px]"
          // onClickEvent={() => }
        />

        <CommonButton
          text={'취소'}
          bgColor={'white'}
          textColor={'black'}
          radius={'moreRounded'}
          shadowColor={'lightShadow'}
          fontSize={'lg'}
          additionalClass="w-[197px] h-[45px] ml-[13.5px]"
          onClickEvent={() => setAddModalToggle(false)}
        />
      </div>
    </div>
  );
};

export default PlusModal;
