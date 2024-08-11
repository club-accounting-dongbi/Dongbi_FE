'use client';
import Image from 'next/image';
import Logout from '@/public/icon/icon_logout.svg';
import React from 'react';
import IconPerson from './IconComponents/IconPerson';
import IconGenerationManage from './IconComponents/IconGenerationManage';
import IconNewGeneration from './IconComponents/IconNewGeneration';

const HamburgerMenuContainer =
  'absolute right-[20px] w-[199px] pt-[7px] pb-[7px] pl-[6px] pr-[6px] bg-white rounded-[5px] flex flex-col border border-custom-gray-5 drop-shadow-lg z-10';
const MenuContainer =
  'w-[187px] h-[57px] rounded-[5px] ml-auto mr-auto flex items-center w-full px-3 text-[17px] text-custom-gray-2 cursor-pointer hover:bg-custom-gray-5 hover:text-black';
const LogoutButtonContainer =
  'w-[187px] h-[57px] rounded-[5px] ml-auto mr-auto flex items-center w-full px-3 text-[17px] text-red-500 cursor-pointer hover:bg-custom-gray-5 hover:text-red-700';

const HamburgerMenu = () => {
  return (
    <div className={HamburgerMenuContainer}>
      <button className={`${MenuContainer} group`}>
        <div className="mr-2 group-hover:text-black">
          <IconPerson className="icon w-[20px] h-[20px] fill-none text-custom-gray-2 group-hover:stroke-black group-hover:text-black" />
        </div>
        계정 관리
      </button>
      <button className={`${MenuContainer} group`}>
        <div className="mr-2 group-hover:text-black">
          <IconGenerationManage className="icon w-[20px] h-[20px] fill-none text-custom-gray-2 group-hover:stroke-black group-hover:text-black" />
        </div>
        n기 관리
      </button>
      <button className={`${MenuContainer} group`}>
        <div className="mr-2 group-hover:text-black">
          <IconNewGeneration className="icon w-[20px] h-[20px] fill-none text-custom-gray-2 group-hover:text-black" />
        </div>
        새 기수 시작하기
      </button>
      <button className={`${LogoutButtonContainer} group`}>
        <div className="mr-2 group-hover:text-red-700">
          <Image src={Logout} width={17.54} height={17.54} alt="Logout" />
        </div>
        로그아웃
      </button>
    </div>
  );
};

export default HamburgerMenu;
