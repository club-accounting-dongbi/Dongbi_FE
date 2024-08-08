'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ScanReceipt from '@/public/icon/icon_scan_receipt.svg';
import RegisterReceipt from '@/public/icon/icon_register_receipt.svg';
import ReceiptScanStep1 from './ReceiptScanStep1';

const MinusModalContainer = 'flex flex-col items-center';
const ModalTitle = 'text-40 text-custom-black mt-[70px]';
const ButtonContainer = 'flex flex-row mt-[81px]';
const ScanReceiptContainer = 'cursor-pointer mr-[19px]';
const RegisterReceiptContainer = 'cursor-pointer ml-[19px]';
const WarningText = 'text-17 mt-[83px] font-500';
interface ReceiptScanStep1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
}

const MinusModal: React.FC<ReceiptScanStep1Props> = ({ setStep }) => {
  return (
    <div className={MinusModalContainer}>
      <div className={ModalTitle}>지출 등록</div>
      <div className={ButtonContainer}>
        <div className={ScanReceiptContainer} onClick={() => setStep(1)}>
          <Image src={ScanReceipt} width={200} height={200} alt="영수증 스캔" />
        </div>
        <div className={RegisterReceiptContainer} onClick={() => setStep(3)}>
          <Image
            src={RegisterReceipt}
            width={200}
            height={200}
            alt="직접 등록"
          />
        </div>
      </div>
      <div className={WarningText}>
        *지출등록은 <span className="text-[#FF3B30]">활동종료 후 7일까지</span>{' '}
        등록가능합니다.
      </div>
    </div>
  );
};

export default MinusModal;
