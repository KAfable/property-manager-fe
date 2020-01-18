import React from 'react';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

const Home = () => {
  return (
    <div className="content">
      <div className="content-wrapper">
        <h1>PropMan</h1>
        <h2>Property management doesn&apos;t have to be hard.</h2>
      </div>
    </div>
  );
};

export default Home;
