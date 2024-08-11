'use client';
import React from 'react';
import { cva, cx } from 'class-variance-authority';
import Image from 'next/image';
import ReceiptIcon from '@/public/icon/icon_receipt.svg';

interface LogRowProps {
  addMinusType: 'add' | 'minus';
  content: string;
  managerName?: string;
  newNumber: number;
  totalNumber: number;
}

const LogRowContainer =
  'w-[768px] h-fit border-b-[1.2px] border-[#E2E2E2] justify-center items-center flex flex-col pt-[33px] pb-[39px]';
const LogTime = 'text-[#868686] text-16 mr-auto';
const DetailContainer = 'w-full flex flex-row justify-between mt-[13px]';
const DetailText = 'mt-[13px] mr-auto flex flex-row items-center';
const ReceiptIconContainer = 'w-[20px] h-[20px] ml-[5px] cursor-pointer';
const Manager = 'text-16 text-[#868686] mt-[7px]';
const DetailNumber = 'flex flex-col items-end';
const TotalNumber = 'text-16 text-[#868686] mt-[7px]';

const NewNumber = cva('text-20', {
  variants: {
    type: {
      add: 'text-custom-red',
      minus: 'text-custom-blue',
    },
  },
});

const LogRow = ({
  addMinusType,
  content,
  managerName,
  newNumber,
  totalNumber,
}: LogRowProps) => {
  return (
    <div className={LogRowContainer}>
      <div className={LogTime}>21:24:25</div>
      <div className={DetailContainer}>
        <div>
          <div className={DetailText}>
            <div>{content}</div>
            <div className={ReceiptIconContainer}>
              <Image src={ReceiptIcon} width={20} height={20} alt="영수증" />
            </div>
          </div>
          {addMinusType === 'minus' && (
            <div className={Manager}>담당자: {managerName}</div>
          )}
        </div>

        <div className={DetailNumber}>
          <div className={NewNumber({ type: addMinusType })}>
            {addMinusType === 'minus'
              ? '-' + newNumber.toLocaleString('ko-KR') + '원'
              : '+' + newNumber.toLocaleString('ko-KR') + '원'}
          </div>
          <div className={TotalNumber}>{totalNumber}원</div>
        </div>
      </div>
    </div>
  );
};

export default LogRow;
