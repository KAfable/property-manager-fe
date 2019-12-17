import React from 'react';
import SubBlock from '../../components/Landing/SubBlock';
import Header from '../../components/Landing/Header';

const Landlord = () => {
  return (
    <div className="landlordView">
      <div className="landlordBlock">
        <div className="landlordHeader">
          <Header />
        </div>
        <div className="landlordSubs">
          <SubBlock />
          <SubBlock />
          <SubBlock />
        </div>
      </div>
    </div>
  );
};

export default Landlord;
