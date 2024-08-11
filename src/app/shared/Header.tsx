'use client';
import Image from 'next/image';
import React, { useState, useEffect, useRef } from 'react';
import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import Hamburger from '@/public/icon/icon_hamburger.svg';
import HamburgerMenu from './components/HamburgerMenu';

const HeaderContainer =
  'relative min-w-[768px] h-auto pt-[112px] flex flex-row';
const LogoContainer = 'absolute w-auto h-[120px] top-0 left-[20px]';
const LogoWordContainer = 'mb-[27px] text-[24px] text-primary mr-auto ml-auto';
const HamburgerContainer =
  'absolute cursor-pointer w-[22.67px] h-[17px] top-[100px] right-[20px]';

const Home = () => {
  const [isHamburgerOpen, setHambergerOpen] = useState(false);
  const hamburgerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isHamburgerOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        !hamburgerRef.current?.contains(event.target as Node)
      ) {
        setHambergerOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isHamburgerOpen]);

  return (
    <div className={HeaderContainer}>
      <div className={LogoContainer}>
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className={LogoWordContainer}>
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>
      <div
        className={HamburgerContainer}
        ref={hamburgerRef}
        onClick={() => setHambergerOpen(!isHamburgerOpen)}
      >
        <Image src={Hamburger} width={22} height={17} alt="Hamburger" />
      </div>
      {isHamburgerOpen && (
        <div ref={menuRef}>
          <HamburgerMenu />
        </div>
      )}
    </div>
  );
};

export default Home;
