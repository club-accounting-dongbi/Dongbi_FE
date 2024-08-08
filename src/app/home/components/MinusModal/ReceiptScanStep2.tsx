'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ScanReceipt from '@/public/icon/icon_scan_receipt.svg';
import CommonButton from '@/src/components/common/CommonButton';

interface ReceiptScanStep1Props {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  receiptImage: any;
  receiptPreview: any;
}

const ReceiptScanStep1Container = 'flex flex-col items-center';
const ReceiptPreviewContainer = 'w-[448px] h-[auto] mt-[63px] mb-[32px]';

const BackIcon =
  'absolute cursor-pointer w-26.26 h-26.26 drop-shadow-md top-[26px] left-[26px]';
const ModalTitle = 'text-40 text-custom-black mt-[70px]';
const DetailContainer =
  'w-[448px] flex flex-col mb-[54px] pt-[24px] pb-[24px] border-custom-grey border-t-[1px] border-b-[1px]';
const DetailRow = 'flex flex-row text-20 justify-between mt-[5px] mb-[5px]';
const DetailItem = 'text-custom-grey ';
const ModifyInput =
  'border-b-[1px] border-custom-grey  focus:border-black focus:ring-0 outline-none placeholder-custom-gray';
const ScanPrice = 'text-custom-orange ';
const ButtonArea = 'flex flex-row justify-between mb-[70px]';

const ReceiptScanStep2: React.FC<ReceiptScanStep1Props> = ({
  setStep,
  receiptImage,
  receiptPreview,
}) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <div className={ReceiptScanStep1Container}>
      <img
        src={'icon/icon_arrow_back.svg'}
        className={BackIcon}
        onClick={() => setStep(1)}
      />
      <div className={ModalTitle}>영수증 스캔</div>
      <div className={ReceiptPreviewContainer}>
        <Image
          src={receiptPreview}
          width={448}
          height={390}
          alt="영수증 이미지"
          style={{ objectFit: 'cover' }}
        />
      </div>
      {isEdit === false ? (
        <div className={DetailContainer}>
          <div className={DetailRow}>
            <div className={DetailItem}>지출일</div>
            <div>2024.06.08</div>
          </div>
          <div className={DetailRow}>
            <div className={DetailItem}>지출 시각</div>
            <div>23:39:21</div>
          </div>
          <div className={DetailRow}>
            <div className={DetailItem}>담당자</div>
            <div>김민수</div>
          </div>
          <div className={DetailRow}>
            <div className={DetailItem}>지출 금액</div>
            <div className={ScanPrice}>80,000원</div>
          </div>
          <div className={DetailRow}>
            <div className={DetailItem}>지출 사유</div>
            <div>회식(역전할맥)</div>
          </div>
        </div>
      ) : (
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
      )}

      {/**
 @todo onClickEvent 바꾸기
* */}
      {isEdit === false ? (
        <div className={ButtonArea}>
          <CommonButton
            text={'등록'}
            bgColor={'orange'}
            textColor={'white'}
            radius={'moreRounded'}
            shadowColor={'lightShadow'}
            fontSize={'lg'}
            additionalClass="w-[197px] h-[45px] mr-[13.5px]"
            // onClickEvent={() => setStep(3)}
          />
          <CommonButton
            text={'수정'}
            bgColor={'white'}
            textColor={'black'}
            radius={'moreRounded'}
            shadowColor={'lightShadow'}
            fontSize={'lg'}
            additionalClass="w-[197px] h-[45px] ml-[13.5px]"
            onClickEvent={() => setIsEdit(true)}
          />
        </div>
      ) : (
        <div className={ButtonArea}>
          <CommonButton
            text={'수정 완료'}
            bgColor={'orange'}
            textColor={'white'}
            radius={'moreRounded'}
            shadowColor={'lightShadow'}
            fontSize={'lg'}
            additionalClass="w-[197px] h-[45px] mr-[13.5px]"
            onClickEvent={() => setIsEdit(false)}
          />
          <CommonButton
            text={'취소'}
            bgColor={'white'}
            textColor={'black'}
            radius={'moreRounded'}
            shadowColor={'lightShadow'}
            fontSize={'lg'}
            additionalClass="w-[197px] h-[45px] ml-[13.5px]"
            onClickEvent={() => setIsEdit(false)}
          />
        </div>
      )}
    </div>
  );
};

export default ReceiptScanStep2;
