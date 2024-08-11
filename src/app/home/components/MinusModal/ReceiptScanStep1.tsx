'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ScanReceipt from '@/public/icon/icon_scan_receipt.svg';
import CommonButton from '@/src/components/common/CommonButton';

interface ReceiptScanStep1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  receiptImage: any;
  receiptPreview: any;
  setReceiptImage: React.Dispatch<React.SetStateAction<any>>;
  setReceiptPreview: React.Dispatch<React.SetStateAction<any>>;
}

const ReceiptScanStep1Container = 'flex flex-col items-center';
const BackIcon =
  'absolute cursor-pointer w-26.26 h-26.26 drop-shadow-md top-[26px] left-[26px]';
const ModalTitle = 'text-40 text-custom-black mt-[70px]';
const ReceiptPreviewContainer = 'w-[500px] h-[auto] mt-[63px] mb-[78px]';
const ButtonArea = 'flex flex-row justify-space-between mb-[70px]';
const InputContainer = 'hidden';
const ScanReceiptContainer = 'cursor-pointer mr-[19px] mt-[81px] mb-[100px]';

const ReceiptScanStep1: React.FC<ReceiptScanStep1Props> = ({
  setStep,
  receiptImage,
  receiptPreview,
  setReceiptImage,
  setReceiptPreview,
}) => {
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      /**
       *
       * @todo receiptImage 형식이랑 내용 바꿔야 함
       */
      const file = e.target.files[0];
      console.log('Selected file:', file); // 디버깅을 위한 콘솔 로그 추가

      setReceiptImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        if (readerEvent.target) {
          const imgUrl = readerEvent.target.result;
          console.log('FileReader result:', imgUrl); // 디버깅을 위한 콘솔 로그 추가
          setReceiptPreview(imgUrl);
        } else {
          console.error('FileReader onload event target is null');
        }
      };
      reader.onerror = (error) => {
        console.error('FileReader error:', error);
      };
    } else {
      console.error('No files selected');
    }
  };
  return (
    <div className={ReceiptScanStep1Container}>
      <img
        src={'/icon/icon_arrow_back.svg'}
        className={BackIcon}
        onClick={() => setStep(0)}
      />
      <div className={ModalTitle}>영수증 스캔</div>
      {receiptImage ? (
        <>
          <div className={ReceiptPreviewContainer}>
            <Image
              src={receiptPreview}
              width={500}
              height={200}
              alt="영수증 이미지"
            />
          </div>

          <div className={ButtonArea}>
            <CommonButton
              text={'업로드'}
              bgColor={'orange'}
              textColor={'white'}
              radius={'moreRounded'}
              shadowColor={'lightShadow'}
              fontSize={'lg'}
              additionalClass="w-[197px] h-[45px] mr-[13.5px]"
              onClickEvent={() => setStep(2)}
            />
            <CommonButton
              text={'취소'}
              bgColor={'white'}
              textColor={'black'}
              radius={'moreRounded'}
              shadowColor={'lightShadow'}
              fontSize={'lg'}
              additionalClass="w-[197px] h-[45px] ml-[13.5px]"
              onClickEvent={() => setStep(0)}
            />
          </div>
        </>
      ) : (
        <label htmlFor="inputReceipt">
          <div className={ScanReceiptContainer}>
            <Image
              src={ScanReceipt}
              width={200}
              height={200}
              alt="영수증 스캔"
            />
          </div>
          <input
            type="file"
            id="inputReceipt"
            accept="image/*"
            onChange={handleImageChange}
            className={InputContainer}
          />
        </label>
      )}
    </div>
  );
};

export default ReceiptScanStep1;
