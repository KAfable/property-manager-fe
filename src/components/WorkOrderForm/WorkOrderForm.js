import React from 'react';
import { navigate } from '@reach/router';
// Redux
import { useSelector, useDispatch } from 'react-redux';

// Formik & Yup
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

// MUI Components
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core';

// Icons
import { MdSend } from 'react-icons/md';

// Redux Actions
import { addWorkOrder, getWorkOrders } from '../../store/actions/index';

// Styling
const useStyles = makeStyles(theme => ({
  formCard: {
    padding: theme.spacing(4)
  },
  formTitle: {
    marginBottom: theme.spacing(2)
  },
  textField: {
    width: '500px',
    maxWidth: '500px',
    margin: theme.spacing(2)
  },
  submitWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    margin: theme.spacing(2)
  },
  submit: {}
}));

// YUP Validation schema
const validationSchemaLandlord = Yup.object().shape({
  title: Yup.string().required('Add a short description for your work order'),
  propertyId: Yup.string().required('Select a property'),
  description: Yup.string().required('Add some details about your work order'),
  type: Yup.string().required('Work order type is required')
});

const validationSchemaTenant = Yup.object().shape({
  title: Yup.string().required('Add a short description for your work order'),
  description: Yup.string().required('Add some details about your work order'),
  type: Yup.string().required('Work order type is required')
});

const WorkOrderForm = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const currentDate = new Date();

  // Submit Fn
  const submit = values => {
    dispatch(addWorkOrder(values)).then(() =>
      dispatch(getWorkOrders()).then(() => navigate('/dashboard/workorders'))
    );
  };

  // Subscribe to user state
  const user = useSelector(state => state.getUserReducer.user);
  const userType = user.type;

  // Bring in property list for the landlord form
  const propertyList = useSelector(state => state.propReducer.properties);

  if (user && userType === 'landlord') {
    return (
      <Paper className={classes.formCard}>
        <h2 className={classes.formTitle}>Create a Work Order</h2>
        <Formik
          enableReinitialize
          validationSchema={validationSchemaLandlord}
          initialValues={{
            title: '',
            propertyId: '',
            description: '',
            type: '',
            startDate: currentDate
          }}
          resetForm
          onSubmit={values => {
            return new Promise(resolve => {
              setTimeout(() => {
                submit(values);
                resolve();
              }, 2000);
            });
          }}
        >
          {({ errors, isSubmitting }) => {
            return (
              <Form>
                <Grid container justify="space-evenly">
                  <Field
                    className={classes.textField}
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="title"
                    type="text"
                    label="Title"
                    as={TextField}
                  />
                  <Field
                    name="propertyId"
                    label="Property"
                    as={TextField}
                    select
                    helperText={
                      errors.property
                        ? errors.property
                        : 'Please select a property'
                    }
                    error={errors.property && true}
                  >
                    {propertyList.map(property => (
                      <MenuItem key={property.id} value={property.id}>
                        {property.name}
                      </MenuItem>
                    ))}
                  </Field>
                  <Field
                    className={classes.textField}
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="description"
                    type="text"
                    label="Description"
                    as={TextField}
                    helperText={
                      errors.description
                        ? errors.description
                        : 'Please enter some details about your work order'
                    }
                    error={errors.description && true}
                  />
                  <Field
                    name="type"
                    label="Order Type"
                    as={TextField}
                    select
                    helperText={
                      errors.orderType
                        ? errors.orderType
                        : 'Please select the type of problem you have'
                    }
                    error={errors.orderType && true}
                  >
                    <MenuItem value="plumbing">Plumbing</MenuItem>
                    <MenuItem value="electrical">Electrical</MenuItem>
                    <MenuItem value="pest control">Pest Control</MenuItem>
                    <MenuItem value="appliances">Appliances</MenuItem>
                    <MenuItem value="HVAC">HVAC</MenuItem>
                  </Field>
                  <div className={classes.submitWrapper}>
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      className={classes.submit}
                      disabled={isSubmitting}
                      type="submit"
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress
                            style={{
                              height: '22px',
                              width: '22px',
                              marginRight: '4px'
                            }}
                          />
                        ) : (
                          <MdSend />
                        )
                      }
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    );
  }
  if (user && userType === 'tenant') {
    return (
      <Paper className={classes.formCard}>
        <h2 className={classes.formTitle}>Create a Work Order</h2>
        <Formik
          enableReinitialize
          validationSchema={validationSchemaTenant}
          initialValues={{
            title: '',
            description: '',
            type: '',
            startDate: currentDate
          }}
          resetForm
          onSubmit={values => {
            submit(values);
          }}
        >
          {({ errors, isSubmitting }) => {
            return (
              <Form>
                <Grid container justify="space-evenly">
                  <Field
                    className={classes.textField}
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="title"
                    type="text"
                    label="Title"
                    as={TextField}
                  />
                  <Field
                    className={classes.textField}
                    size="small"
                    margin="normal"
                    variant="outlined"
                    name="description"
                    type="text"
                    label="Description"
                    as={TextField}
                    helperText={
                      errors.description
                        ? errors.description
                        : 'Please enter some details about your work order'
                    }
                    error={errors.description && true}
                  />
                  <Field
                    name="type"
                    label="Order Type"
                    as={TextField}
                    select
                    helperText={
                      errors.orderType
                        ? errors.orderType
                        : 'Please select the type of problem you have'
                    }
                    error={errors.orderType && true}
                  >
                    <MenuItem value="plumbing">Plumbing</MenuItem>
                    <MenuItem value="electrical">Electrical</MenuItem>
                    <MenuItem value="pest control">Pest Control</MenuItem>
                    <MenuItem value="appliances">Appliances</MenuItem>
                    <MenuItem value="HVAC">HVAC</MenuItem>
                  </Field>
                  <div className={classes.submitWrapper}>
                    <Button
                      size="large"
                      color="primary"
                      variant="contained"
                      className={classes.submit}
                      disabled={isSubmitting}
                      type="submit"
                      endIcon={
                        isSubmitting ? (
                          <CircularProgress
                            style={{
                              height: '22px',
                              width: '22px',
                              marginRight: '4px'
                            }}
                          />
                        ) : (
                          <MdSend />
                        )
                      }
                    >
                      Submit
                    </Button>
                  </div>
                </Grid>
              </Form>
            );
          }}
        </Formik>
      </Paper>
    );
  }

  return null;
};

export default WorkOrderForm;
