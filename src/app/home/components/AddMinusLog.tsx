'use client';
import React from 'react';
import SearchArea from './SearchArea';
import LogRow from './LogRow';

const AddMinusLogContainer =
  'w-[768px] h-fit justify-center items-center flex flex-col';

const AddMinusLog = () => {
  return (
    <div className={AddMinusLogContainer}>
      <SearchArea />
      <LogRow
        addMinusType="add"
        content="1기 김민지(3회차 회비)"
        newNumber={40000}
        totalNumber={540000}
      />
      <LogRow
        addMinusType="minus"
        content="5회차 활동(장소대여비)"
        managerName="김민수"
        newNumber={40000}
        totalNumber={540000}
      />
    </div>
  );
};

export default AddMinusLog;
