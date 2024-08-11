'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import TriangleDown from '@/public/icon/icon_triangle_down.svg';

const DdayBarContainer =
  'relative w-[666px] h-[55px] rounded-[20px] bg-[#FFFAF5]  flex flex-col items-center mt-[35px] mb-[40px]';

const DdayPointer = 'absolute top-0 left-0 flex flex-col items-center';
const DdayBarGray =
  'relative w-[666px] ml-[45px] mr-[45px] mt-[auto] bg-custom-gray-5 border-0 h-[10px] overflow-hidden';
const DdayWord = 'text-custom-orange mb-0 text-[20px] font-bold';
const DdayBarOrange = 'absolute top-0 left-0 h-full bg-custom-orange border-0';
const StartFinish = 'w-[666px] flex flex-row mt-[8px]';
const Start = 'text-12 mr-[auto]';
const Finish = 'text-12 ml-[auto]';

const DdayBar = () => {
  return (
    <div className={DdayBarContainer}>
      <div
        className={DdayPointer}
        style={{ top: '-25px', left: `${20}%`, transform: 'translateX(-50%)' }}
      >
        <div className={DdayWord}>D-14</div>
        <Image src={TriangleDown} alt="Dday" />
      </div>

      <div className={DdayBarGray}>
        <div className={DdayBarOrange} style={{ width: `${20}%` }} />
      </div>
      <div className={StartFinish}>
        <div className={Start}>2024.01.01</div>
        <div className={Finish}>활동 종료</div>
      </div>
    </div>
  );
};

export default DdayBar;
