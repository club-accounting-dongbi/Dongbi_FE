import React, { ReactNode } from 'react';
import { cva } from 'class-variance-authority';

interface CommonModalProps {
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  goBack: boolean;
  content: ReactNode;
}

const modalContainer =
  'fixed w-full h-full top-0 left-0 z-[9999] overflow-auto';

const modalOverlay =
  'absolute  top-0 left-0 w-full h-[calc(100%_+_600px)] bg-black bg-opacity-50';

const modalContent =
  'relative mx-auto mt-[100px] w-[768px] min-h-[300px] px-[58px] py-[57.26px] bg-white rounded-lg font-noto-sans-kr text-base flex flex-col justify-center items-center z-50';

const closeButton = 'absolute cursor-pointer w-26.26 h-26.26 drop-shadow-md';

const CommonModal = ({ setToggle, goBack, content }: CommonModalProps) => {
  return (
    <div className={modalContainer}>
      <div onClick={() => setToggle(false)} className={modalOverlay}>
        <div onClick={(e) => e.stopPropagation()} className={modalContent}>
          {goBack && (
            <img
              src={'icon/icon_arrow_back.svg'}
              className={`${closeButton} top-[26px] left-[26px]`}
            />
          )}
          <img
            onClick={() => setToggle(false)}
            src={'/icon/icon_close_x.svg'}
            className={`${closeButton} top-[26px] right-[26px]`}
          />
          {content}
        </div>
      </div>
    </div>
  );
};

export default CommonModal;
