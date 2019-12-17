import React from 'react';
import Header from '../../components/Landing/Header';
import SubBlock from '../../components/Landing/SubBlock';

const Tenant = () => {
  return (
    <div className="renterView">
      <div className="renterBlock">
        <div className="renterHeader">
          <Header />
        </div>
        <div className="renterSubs">
          <SubBlock />
          <SubBlock />
          <SubBlock />
        </div>
      </div>
    </div>
  );
};

export default Tenant;
