'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import Refresh from '@/public/icon/icon_refresh.svg';
import DdayBar from './DdayBar';

const AssetBoxContainer =
  'relative w-[756px] rounded-[20px] bg-[#FFFAF5] border-2 border-custom-orange-light flex flex-col items-center mt-[35px] mb-[40px] pl-[45px] pr-[45px]';
const RefreshContainer = 'absolute top-[20px] right-[20px] w-[24px] h-[24px]';
const TotalAsset = 'text-custom-gray font-semibold text-24 mt-[40px]';
const TotalAssetNumber =
  'text-[48px] text-custom-orange font-bold mt-[25px] leading-[50px]';
const ClubGeneration = 'text-16 text-custom-black mr-[auto]';
const AssetBox = () => {
  return (
    <div className={AssetBoxContainer}>
      <div className={RefreshContainer}>
        <Image src={Refresh} alt="Refresh" />
      </div>
      <div className={TotalAsset}>총자산</div>
      <div className={TotalAssetNumber}>nnn,nnn원</div>
      <div className={ClubGeneration}>(동아리명) n기 활동 종료</div>
      <DdayBar />
    </div>
  );
};

export default AssetBox;
