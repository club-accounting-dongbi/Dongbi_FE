'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Add from '@/public/icon/icon_add.svg';
import Seperator from '@/public/icon/icon_seperator.svg';
import Minus from '@/public/icon/icon_minus.svg';
import PdfIcon from '@/public/icon/icon_pdf.svg';
import ExcelIcon from '@/public/icon/icon_excel.svg';

interface AddMinusLogProps {
  setAddModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
  setMinusModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}

const ButtonBoxContainer = ' w-[756px] flex flex-row mb-[30px]';
const RegisterButtonArea = 'flex flex-row mr-auto ';
const AddButton =
  'text-custom-black text-20 flex flex-row mr-[26px] cursor-pointer';
const MinusButton =
  'text-custom-black text-20 flex flex-row ml-[26px] cursor-pointer';
const DownloadButtonArea =
  'text-custom-black text-15 items-center flex flex-row ml-auto';
const PdfIconContainer = 'ml-[10px] cursor-pointer';
const ExcelIconContainer = 'ml-[10px] cursor-pointer';

const ButtonBox = ({
  setAddModalToggle,
  setMinusModalToggle,
}: AddMinusLogProps) => {
  return (
    <div className={ButtonBoxContainer}>
      <div className={RegisterButtonArea}>
        <div className={AddButton} onClick={() => setAddModalToggle(true)}>
          <Image src={Add} width={30} height={30} alt="입금 사항 등록" />
          <div style={{ marginLeft: '16px' }}>입금 사항 등록</div>
        </div>
        <Image src={Seperator} alt="seperator" />
        <div className={MinusButton} onClick={() => setMinusModalToggle(true)}>
          <Image src={Minus} width={30} height={30} alt="출금 사항 등록" />
          <div style={{ marginLeft: '16px' }}>출금 사항 등록</div>
        </div>
      </div>
      <div className={DownloadButtonArea}>
        <div>전체 내역 파일로 다운로드</div>
        <div className={PdfIconContainer}>
          <Image src={PdfIcon} width={30} height={30} alt="PDF" />
        </div>
        <div className={ExcelIconContainer}>
          <Image src={ExcelIcon} width={30} height={30} alt="Excel" />
        </div>
      </div>
    </div>
  );
};

export default ButtonBox;
