import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { navigate } from '@reach/router';
import TenantForm from '../../../components/Tenants/TenantForm';
// Redux
import { editTenant, getTenant, getTenants } from '../../../store/actions';

export default function EditTenant({ id }) {
  // setup dispatch to dispatch the action
  const dispatch = useDispatch();

  // when form is submitted dispatch edit action
  const submitFn = tenant => {
    dispatch(editTenant(id, tenant)).then(() => {
      dispatch(getTenants());
      navigate('/dashboard/tenants');
    });
  };

  // grab the tenant from redux state
  const tenant = useSelector(state => state.propReducer.tenant);

  // grab isGettingTenant bool from state
  const isGettingTenant = useSelector(
    state => state.propReducer.isGettingTenant
  );
  // grab isUpdatinTenant bool from state
  const isSubmitting = useSelector(state => state.propReducer.isUpdatingTenant);

  // initialValues for the edit form
  const tenantFields = {
    firstName: tenant.firstName,
    lastName: tenant.lastName,
    phone: tenant.phone,
    email: tenant.email,
    residence: tenant.residenceId
  };

  // get the tenant by id when component mounts
  useEffect(() => {
    dispatch(getTenant(id));
  }, [dispatch, id]);

  return (
    <div className="tenants">
      <TenantForm
        loading={isGettingTenant}
        isSubmitting={isSubmitting}
        initialValues={tenantFields}
        submit={submitFn}
      />
    </div>
  );
}

EditTenant.defaultProps = {
  id: undefined
};

EditTenant.propTypes = {
  id: PropTypes.string
};