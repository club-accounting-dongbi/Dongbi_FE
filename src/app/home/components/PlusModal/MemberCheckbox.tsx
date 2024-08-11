'use client';
import React, { useState } from 'react';
import Checkbox from '@/src/components/common/Checkbox';

interface MemberCheckboxProps {
  member: string;
  isDisabled: boolean;
  isChecked: boolean;
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const MemberCheckboxContainer = 'h-[fit-content] flex flex-row items-center';
const MemberName = 'text-[19px] font-medium ml-[8px]';

const MemberCheckbox: React.FC<MemberCheckboxProps> = ({
  member,
  isDisabled,
  isChecked,
  onChangeHandler,
}) => {
  return (
    <div className={MemberCheckboxContainer}>
      <Checkbox
        isDisabled={isDisabled}
        isChecked={isChecked}
        onChange={onChangeHandler}
      />
      <div className={MemberName}>{member}</div>
    </div>
  );
};

export default MemberCheckbox;
