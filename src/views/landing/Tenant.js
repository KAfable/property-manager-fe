import React from 'react';
import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography
} from '@material-ui/core';
import payment from '../../assets/img/rentpay.gif';
import maintenance from '../../assets/img/maintenance.gif';
import paymentHistory from '../../assets/img/paymentHistory.gif';
import room from '../../assets/img/rentroom.gif';

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
