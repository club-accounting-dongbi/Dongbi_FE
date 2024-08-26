'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import Logo from '@/public/logo/logo.svg';
import LogoWord from '@/public/logo/logo_word.svg';
import CommonButton from '@/src/components/common/CommonButton';
import { useEffect } from 'react';
import IconUsers from '@/src/components/IconComponents/IconUsers';
import IconPerson from '@/src/components/IconComponents/IconPerson';
import {
  startNewGeneration,
  getGenerationData,
} from '@/src/api/generations/createNewGeneration';
import IconDelete from '@/src/components/IconComponents/IconDelete';

interface Member {
  generationNumber: string;
  name: string;
}
const MemberInputArea = 'flex flex-col w-[709px]';
const InputArea = 'flex flex-row justify-between';
const InputBox =
  'w-[217px] h-[49px] text-[#C7C7CC] bg-white  border rounded-md px-2 flex gap-4 items-center focus:outline-none ';
const selectBox = 'w-[100%] focus:outline-none';
const MemberListArea =
  'w-[709px] bg-[#FFF5F1] border-2 border-dashed border-custom-orange rounded-[8px] pl-[31px] pr-[31px] pt-[56px] pb-[56px] mt-[14px] justify-items-center content-start grid grid-cols-4 gap-10';
// const MemberListArea =
//   'content-start grid grid-cols-2 gap-10 mt-[108px] mb-[108px]';

const MemberCell =
  'flex flex-row h-[fit-content] items-center text-14 font-medium';
const StartGenerationStep2 = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const newGenerationNumber = searchParams.get('generationNumber');
  const startDate = searchParams.get('startDate');
  const endDate = searchParams.get('endDate');
  const [clubId, setClubId] = useState<number>(24);
  const [name, setName] = useState<string>('');
  const [newName, setNewName] = useState<string>('');
  const [memberList, setMemberList] = useState<Member[]>([]);
  const [generationNumber, setGenerationNumber] = useState<string>(
    newGenerationNumber ? newGenerationNumber : '',
  );
  const isNewGeneration = generationNumber === newGenerationNumber;

  const [generationList, setGenerationList] = useState<number[] | null>(null);
  const [loading, setLoading] = useState(false);
  const fetchGenerationList = async () => {
    try {
      setLoading(true);
      const response = await getGenerationData({ clubId: clubId });
      setGenerationList([...response?.data, newGenerationNumber]);
    } catch (err) {
      console.error('error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchGenerationList();
  }, [searchParams]);

  const handleGenerationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setGenerationNumber(e.target.value);
    setName('');
    setNewName('');
  };

  const onAddMemberList = (
    e:
      | React.MouseEvent<HTMLButtonElement>
      | React.KeyboardEvent<HTMLInputElement>,
  ) => {
    e.preventDefault();
    if (!generationNumber) {
      alert('기수를 선택해주세요');
    } else if (!(name || newName)) {
      alert('이름을 입력해주세요');
      return;
    }
    if (name?.length > 0) {
      setMemberList((prevList) => [
        ...prevList,
        { generationNumber: generationNumber, name: name },
      ]);
    } else if (newName?.length > 0) {
      setMemberList((prevList) => [
        ...prevList,
        { generationNumber: generationNumber, name: newName },
      ]);
    }
    setName('');
    setNewName('');
  };

  const handleDeleteMember = (el: Member) => {
    if (
      window.confirm(`${el.generationNumber}기 ${el.name}을 삭제하시겠습니까?`)
    ) {
      const deleteIndex = memberList.indexOf(el);

      if (deleteIndex > -1) {
        // 새로운 배열을 생성하고, `deleteIndex`에서 요소를 제거합니다.
        const updatedMemberList = memberList.filter(
          (_, index) => index !== deleteIndex,
        );
        // 새로운 배열로 상태를 업데이트합니다.
        setMemberList(updatedMemberList);
        setName('');
        setNewName('');
      }
    }
  };

  const handleStartNewGeneration = async () => {
    if (
      newGenerationNumber === (undefined || null) ||
      !clubId ||
      !startDate ||
      !endDate ||
      !memberList
    ) {
      alert('입력값을 확인해주세요');
      return;
    } else {
      try {
        setLoading(true);
        const response = await startNewGeneration({
          name: newGenerationNumber?.toString(),
          generationNum: +newGenerationNumber,
          clubId: clubId,
          startDate: startDate,
          endDate: endDate,
          memberNames: memberList,
        });
        console.log('response', response);
      } catch (err) {
        console.error('error:', err);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="w-full min-w-[800px] min-h-screen bg-custom-gradient m-auto pb-[15%] justify-center items-center flex flex-col">
      <div className="w-auto h-auto mt-[77px]">
        <Image src={Logo} width={214} height={120} alt="Logo" />
      </div>
      <div className="mb-[27px] text-[24px] text-primary mr-auto ml-auto">
        <Image src={LogoWord} width={203} height={26} alt="LogoWord" />
      </div>
      <form>
        <div className={MemberInputArea}>
          <div className={InputArea}>
            <div className={`${InputBox} border-custom-orange`}>
              <div className="w-[30px] flex justify-center items-center">
                <IconUsers className="icon w-[24px] h-[24px] fill-none text-black" />
              </div>

              <select
                className={selectBox}
                name="기수 선택"
                value={generationNumber}
                onChange={handleGenerationChange}
              >
                {generationList?.map((el, index) => (
                  <option key={index} value={el}>
                    {el}
                  </option>
                ))}
              </select>
            </div>
            <div
              className={`${InputBox} + ${
                isNewGeneration ? 'border-gray-300' : 'border-custom-orange'
              }
              `}
            >
              <div className="w-[30px] flex justify-center items-center">
                <IconPerson
                  className={`icon w-[20px] h-[20px] fill-none text-${isNewGeneration ? 'grey' : 'black'}`}
                />
              </div>

              <select
                className={selectBox}
                name="이름 선택"
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isNewGeneration}
              >
                <option value="">이름 선택</option>
                <option>1</option>
                <option>2</option>
              </select>
            </div>
            <input
              type="text"
              placeholder="이름 직접 입력"
              value={newName}
              disabled={!isNewGeneration}
              onChange={(e) => setNewName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  e.preventDefault();
                  onAddMemberList(e);
                }
              }}
              className={`
                ${InputBox} + ${
                  !isNewGeneration ? 'border-gray-300' : 'border-custom-orange'
                }
              `}
            />
          </div>
          <CommonButton
            text="추가하기"
            bgColor="orange"
            textColor="white"
            radius="moreRounded"
            shadowColor="lightShadow"
            fontSize="sm"
            additionalClass="w-[120px] h-[45px] mt-[14px] ml-auto"
            onClickEvent={onAddMemberList}
          />
        </div>
      </form>

      {memberList.length > 0 && (
        <>
          <div className={MemberListArea}>
            {memberList.map((el, index) => (
              <div key={index} className={MemberCell}>
                {el?.generationNumber}기 {el?.name}
                <div
                  className="w-[14.8px] h-[14.8px] ml-[13.05px]"
                  onClick={() => handleDeleteMember(el)}
                >
                  <IconDelete
                    className={`icon w-[14.8px] h-[14.8px] fill-none`}
                  />
                </div>
              </div>
            ))}
          </div>
          <CommonButton
            text="새 기수 시작하기"
            bgColor="orange"
            textColor="white"
            radius="moreRounded"
            shadowColor="lightShadow"
            fontSize="sm"
            additionalClass="w-[331px] h-[45px] mt-[34px]"
            onClickEvent={handleStartNewGeneration}
          />
        </>
      )}
    </div>
  );
};

export default StartGenerationStep2;
