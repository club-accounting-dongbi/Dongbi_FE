'use client';
import React, { useState } from 'react';
import PlusModal from './PlusModal';
import AddMember from './AddMember';

const PlusModalRouterContainer = 'flex flex-col items-center';
interface PlusModalRouterProps {
  setAddModalToggle: React.Dispatch<React.SetStateAction<boolean>>;
}
const PlusModalRouter: React.FC<PlusModalRouterProps> = ({
  setAddModalToggle,
}) => {
  const [step, setStep] = useState(0);
  const [memberList, setMemberList] = useState<string[]>([
    '1기 김민지',
    '1기 이민지',
    '2기 김민지',
    '3기 김민지',
    '4기 김민지',
    '1기 김민지',
    '1기 이민지',
    '2기 김민지',
    '3기 김민지',
    '4기 김민지',
    '1기 김민지',
    '1기 이민지',
    '2기 김민지',
    '3기 김민지',
    '4기 김민지',
    '5기 김민지(1234)',
  ]);
  const [checkedMemberList, setCheckedMemberList] = useState<string[]>([]);

  const renderStep = () => {
    switch (step) {
      case 0:
        return (
          <PlusModal
            setStep={setStep}
            setAddModalToggle={setAddModalToggle}
            memberList={memberList}
            setMemberList={setMemberList}
            checkedMemberList={checkedMemberList}
            setCheckedMemberList={setCheckedMemberList}
          />
        );
      case 1:
        return (
          <AddMember
            setStep={setStep}
            memberList={memberList}
            setMemberList={setMemberList}
            checkedMemberList={checkedMemberList}
            setCheckedMemberList={setCheckedMemberList}
          />
        );
    }
  };

  return <div className={PlusModalRouterContainer}>{renderStep()}</div>;
};

export default PlusModalRouter;
