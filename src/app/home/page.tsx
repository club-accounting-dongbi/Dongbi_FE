'use client';
import React, { useState } from 'react';
import Header from '../shared/Header';
import UpperBox from './components/UpperBox';
import AddMinusLog from './components/AddMinusLog';
import CommonModal from '@/src/components/common/CommonModal';
import PlusModalRouter from './components/PlusModal/PlusModalRouter';
import MinusModalRouter from './components/MinusModal/MinusModalRouter';

const Home = () => {
  const [addModalToggle, setAddModalToggle] = useState(false);
  const [minusModalToggle, setMinusModalToggle] = useState(false);

  return (
    <div className="w-full min-w-[800px] pb-[15%] justify-center items-center flex flex-col">
      <Header />
      <UpperBox
        setAddModalToggle={setAddModalToggle}
        setMinusModalToggle={setMinusModalToggle}
      />
      <AddMinusLog />
      {addModalToggle && (
        <CommonModal
          setToggle={setAddModalToggle}
          goBack={false}
          close={true}
          content={<PlusModalRouter setAddModalToggle={setAddModalToggle} />}
        />
      )}
      {minusModalToggle && (
        <CommonModal
          setToggle={setMinusModalToggle}
          goBack={false}
          close={true}
          content={<MinusModalRouter />}
        />
      )}
    </div>
  );
};

export default Home;
