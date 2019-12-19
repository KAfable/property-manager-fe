import React from 'react';
import SubBlock from '../../components/Landing/SubBlock';

const Landlord = () => {
  return (
    <div className="landlordView">
      {' '}
      <div className="landlordView">
        <div className="landlordBlock">
          <div className="landlordHeader">
            <div className="headerBlock">
              <h1>Tired of headaches?</h1>
              <p>
                We&apos;ll keep this short, we all know managing properties is{' '}
                <bold>hard</bold> work. The world is changing, and to get
                tenants and tenants year after year your tenants need to be
                happy. Nothing keeps tenants happier than knowing their problems
                can be solved quickly, effectively, and easily. Swipe, tap, or
                click - we&apos;re here to make sure they know they are being
                attended to.
              </p>
            </div>
          </div>
          <div className="renterSubs">
            <SubBlock />
            <SubBlock />
            <SubBlock />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landlord;
