import React from 'react';
<<<<<<< HEAD
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
=======
import Slider from 'react-animated-slider';
import relax from '../../assets/img/relax.gif';
import houseRent from '../../assets/img/house.gif';
import payment from '../../assets/img/payments.gif';
import rent from '../../assets/img/agree.jpg';
import 'react-animated-slider/build/vertical.css';
import 'normalize.css/normalize.css';

const content = [
  {
    title: 'Keep Relaxing and Leave Your Worry on Us',
    description:
      ' PropMan serve investors and landlords who don’t want to manage their rental properties themselves but want to rest/relax assured knowing that all of the details are being handled professionally.',
    image: `url(${relax})`
  },
  {
    title: 'Easy and Realiable Maintenance Adminstration',
    description:
      'PropMan provides the platform to collect maintenance requests from tenants and reorganized based on the maintenance type and urgency. Then it dispatches the request to the right department. It also gives the power to follow the statues of the work order and the satisfaction of the Tenants. ',
    image: `url(${houseRent})`
  },
  {
    title: 'Payment Collection',
    description:
      'Payment collection is as easy as paying your phone bill. The payment portal that integrated with PropMan app provides the possibility to collect payments from the tenants and transfer to your account. The system notifies the tenants the payment due date and also calculate additional late and administration fees. ',
    image: `url(${payment})`
  },
  {
    title: 'Rent and Lease Agreement  ',
    description:
      'All rental processes such as application, background check, credit check and signing take care by PropMan.  Tenant can file their application online. The landlord with the help of PropMan process the application and inform the applicant the statues of their application.',
    image: `url(${rent})`
  }
];

const Landlord = () => {
  return (
    <div className="landlord-wrapper">
      <Slider
        autoplay={3000}
        direction="vertical"
        nextButton="next"
        className="slider-wrapper"
      >
        {content.map((item, index) => (
          <div
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            className="slider-content"
            style={{
              background: `${item.image} no-repeat center center`
            }}
          >
            <div className="inner">
              <h1>{item.title}</h1>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </Slider>
>>>>>>> 2307b2c89fba97d409e41f887c37b8c32ff46d68
    </div>
  );
};

export default Landlord;
