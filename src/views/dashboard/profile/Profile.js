import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getProperties } from '../../../store/actions';
import {
  Divider,
  Grid,
  Paper,
  CardHeader,
  CardContent,
  Typography
} from '@material-ui/core';
import ProfileCard from './ProfileCard';
import PropertyCard from '../../../components/Properties/PropertyCard';

export default function Profile() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const propertyList = useSelector(state => state.propReducer.properties);

  useEffect(() => {
    setTimeout(() => {
      dispatch(
        getProperties(
          'https://pt6-propman-staging.herokuapp.com/api/propertieshttps://pt6-propman-staging.herokuapp.com/api/properties'
        )
      ).then(() => {
        setLoading(false);
      });
    }, 2000);
  }, [dispatch]);

  return (
    <div className="profile">
      <h1>User Profile</h1>
      <Divider />
      <br />
      <ProfileCard />
    </div>
  );
}
