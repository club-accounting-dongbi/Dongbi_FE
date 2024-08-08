'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import ScanReceipt from '@/public/icon/icon_scan_receipt.svg';
import RegisterReceipt from '@/public/icon/icon_register_receipt.svg';
import ReceiptScanStep1 from './ReceiptScanStep1';
import ReceiptScanStep2 from './ReceiptScanStep2';
import ManualStep1 from './ManualStep1';
import MinusModal from './MinusModal';

const MinusModalRouterContainer = 'flex flex-col items-center';

const MinusModalRouter = () => {
  const [step, setStep] = useState(0);
  const [receiptImage, setReceiptImage] = useState<any>();
  const [receiptPreview, setReceiptPreview] = useState<any>();
  const renderStep = () => {
    switch (step) {
      case 0:
        return <MinusModal setStep={setStep} />;
      case 1:
        return (
          <ReceiptScanStep1
            setStep={setStep}
            receiptImage={receiptImage}
            receiptPreview={receiptPreview}
            setReceiptImage={setReceiptImage}
            setReceiptPreview={setReceiptPreview}
          />
        );
      case 2:
        return (
          <ReceiptScanStep2
            setStep={setStep}
            receiptImage={receiptImage}
            receiptPreview={receiptPreview}
          />
        );
      case 3:
        return (
          <ManualStep1
            setStep={setStep}
            receiptImage={receiptImage}
            receiptPreview={receiptPreview}
            setReceiptImage={setReceiptImage}
            setReceiptPreview={setReceiptPreview}
          />
        );
    }
  };

  return <div className={MinusModalRouterContainer}>{renderStep()}</div>;
};

export default MinusModalRouter;
