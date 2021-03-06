import React from 'react';
import { Container } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux';
import TenantForm from '../../../components/Tenants/TenantForm';
import { addTenant as action, getTenants } from '../../../store/actions';

const addTenant = action(
  'https://pt6-propman-staging.herokuapp.com/api/tenants'
);

export default function CreateTenant() {
  const dispatch = useDispatch();

  const properties = useSelector(state => state.propReducer.properties);

  // define initialValues passed into the form
  const initialValues = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
    residenceId: ''
  };

  const handleSubmit = tenant => {
    dispatch(addTenant(tenant)).then(() => dispatch(getTenants()));
  };

  return (
    <Container>
      <TenantForm
        submit={handleSubmit}
        properties={properties}
        initialValues={initialValues}
      />
    </Container>
  );
}
