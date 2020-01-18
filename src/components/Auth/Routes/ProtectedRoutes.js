import React from 'react';
import { Router, Redirect } from '@reach/router';
import Dashboard from '../../../views/dashboard/Dashboard';
import Properties from '../../../views/dashboard/properties/Properties';
import Profile from '../../../views/dashboard/profile/Profile';
import Overview from '../../../views/dashboard/overview/Overview';
import CreateProperty from '../../../views/dashboard/properties/CreateProperty';
import Property from '../../../views/dashboard/properties/Property';
import EditProperty from '../../../views/dashboard/properties/EditProperty';
import EditTenant from '../../../views/dashboard/tenants/EditTenant';
import CreateTenant from '../../../views/dashboard/tenants/CreateTenant';
<<<<<<< HEAD
=======
import Tenants from '../../../views/dashboard/tenants/Tenants';
import Tenant from '../../../views/dashboard/tenants/Tenant';
import TenantWorkOrderForm from '../../WorkorderForm/TenantWorkOrderForm';
import LandlordWorkOrderForm from '../../WorkorderForm/LandlordWorkOrderForm';
>>>>>>> 2307b2c89fba97d409e41f887c37b8c32ff46d68

function ProtectedRoutes() {
  // eslint-disable-next-line consistent-return
  function getToken() {
    try {
      const token = localStorage.getItem('token');
      return token;
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
      return null;
    }
  }
  const token = getToken();

  if (!token) {
    return <Redirect to="/" noThrow />;
  }
  return (
    <Router>
      <Dashboard path="/">
        <Overview path="/" />
        <Profile path="profile" />
        <Properties path="properties" />
        <Property path="properties/:id" />
        <CreateProperty path="properties/add" />
        <EditProperty path="properties/edit/:id" />
<<<<<<< HEAD
        <CreateTenant path="tenant/add" />
=======
        <TenantWorkOrderForm path="properties/workOrderTenant" />
        <LandlordWorkOrderForm path="properties/workOrderLandlord" />
        <Tenants path="tenants" />
        <Tenant path="tenants/:id" />
        <CreateTenant path="tenants/add" />
        <EditTenant path="tenants/edit/:id" />
>>>>>>> 2307b2c89fba97d409e41f887c37b8c32ff46d68
      </Dashboard>
    </Router>
  );
}

export default ProtectedRoutes;
