'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import UploadPhoto from '@/public/icon/icon_upload_photo.svg';
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
const ReceiptPreviewContainer = 'w-[448px] h-[auto] mt-[63px] mb-[78px]';
const InputContainer = 'hidden';
const UploadPhotoContainer = 'cursor-pointer mr-[19px] mt-[142px] mb-[143px]';

const DetailContainer =
  'w-[448px] flex flex-col mb-[54px] pt-[24px] pb-[24px] border-custom-grey border-t-[1px] border-b-[1px]';
const DetailRow = 'flex flex-row text-20 justify-between mt-[5px] mb-[5px]';
const DetailItem = 'text-custom-grey ';
const ModifyInput =
  'border-b-[1px] border-custom-grey  focus:border-black focus:ring-0 outline-none placeholder-custom-gray';

const ManualStep1: React.FC<ReceiptScanStep1Props> = ({
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

      setReceiptImage(file);
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (readerEvent) => {
        if (readerEvent.target) {
          const imgUrl = readerEvent.target.result;
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
      <div className={ModalTitle}>직접 등록</div>

      {receiptPreview ? (
        <div className={ReceiptPreviewContainer}>
          <Image
            src={receiptPreview}
            width={448}
            height={200}
            alt="영수증 이미지"
          />
        </div>
      ) : (
        <label htmlFor="inputReceipt">
          <div className={UploadPhotoContainer}>
            <Image src={UploadPhoto} width={200} height={200} alt="사진 등록" />
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
      <div className={DetailContainer}>
        <div className={DetailRow}>
          <div className={DetailItem}>지출일</div>
          <input className={ModifyInput} />
        </div>
        <div className={DetailRow}>
          <div className={DetailItem}>지출 시각</div>
          <input
            className={ModifyInput}
            placeholder="지출 시각을 적어주세요."
          />
        </div>
        <div className={DetailRow}>
          <div className={DetailItem}>담당자</div>
          <input className={ModifyInput} placeholder="담당자를 적어주세요." />
        </div>
        <div className={DetailRow}>
          <div className={DetailItem}>지출 금액</div>
          <input
            className={ModifyInput}
            placeholder="지출 금액을 적어주세요."
          />
        </div>
        <div className={DetailRow}>
          <div className={DetailItem}>지출 사유</div>
          <input
            className={ModifyInput}
            placeholder="지출 사유를 적어주세요."
          />
        </div>
      </div>
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
    </div>
  );
};

export default ManualStep1;
