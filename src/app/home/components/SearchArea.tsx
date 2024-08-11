'use client';
import React, { useState } from 'react';
import { cva, cx } from 'class-variance-authority';
import Image from 'next/image';
import Calendar from '@/public/icon/icon_calendar.svg';
import Dot from '@/public/icon/icon_dot.svg';
import Search from '@/public/icon/icon_search.svg';
import cn from '@/src/utils/cn';

const SearchAreaContainer =
  'w-[768px] h-fit justify-between items-center flex flex-col mt-[30px]';
const DateSearch =
  'text-custom-black text-20 mr-auto flex flex-row cursor-pointer';
const StartEndDate = 'mr-[13px]';
const SearchDetail = 'w-full flex flex-row mt-[20px]';
const FilterArea = 'flex flex-row mr-auto';
const DotContainer = 'flex justify-center w-full mb-[4px]';
const SearchInput =
  'ml-auto flex flex-row border-custom-gray-2 border-b-[1px] pb-[13px]';
const SearchInputPlaceholder =
  'w-[275px] text-custom-gray-2 text-15 ml-[15px] focus:outline-none';

const filterButtonStyles = cva('text-20 mr-[26px] mt-auto cursor-pointer', {
  variants: {
    active: {
      true: 'text-custom-orange',
      false: 'text-custom-black',
    },
  },
  defaultVariants: {
    active: false,
  },
});

const SearchArea = () => {
  const [filter, setFilter] = useState<string>('전체');
  const [keyword, setKeyword] = useState<string>();
  return (
    <div className={SearchAreaContainer}>
      <div className={DateSearch}>
        <span className={StartEndDate}>시작일 - 종료일</span>
        <Image src={Calendar} width={17} height={19} alt="날짜" />
      </div>
      <div className={SearchDetail}>
        <div className={FilterArea}>
          {['전체', '입금', '출금'].map((el, index) => (
            <div
              key={index}
              className={filterButtonStyles({ active: filter === el })}
              onClick={() => setFilter(el)}
            >
              {filter === el && (
                <div className={DotContainer}>
                  <Image src={Dot} width={7} height={7} alt={el} />
                </div>
              )}
              {el}
            </div>
          ))}
        </div>
        <div className={SearchInput}>
          <Image
            src={Search}
            alt="검색"
            className={cn('w-[23px]', 'h-[23px]')}
          />
          <input
            onChange={(e) => setKeyword(e.target.value)}
            className={SearchInputPlaceholder}
            placeholder="동아리원 이름 및 항목명을 검색해보세요"
          />
        </div>
      </div>
    </div>
  );
};

export default SearchArea;
