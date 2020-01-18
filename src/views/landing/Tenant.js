import React from 'react';
<<<<<<< HEAD
import Header from '../../components/Landing/Header';
import SubBlock from '../../components/Landing/SubBlock';
=======
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
>>>>>>> 2307b2c89fba97d409e41f887c37b8c32ff46d68

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
