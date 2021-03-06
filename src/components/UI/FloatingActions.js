import React from 'react';
import { useSelector } from 'react-redux';
import { navigate } from '@reach/router';
import { makeStyles } from '@material-ui/core/styles';
import SpeedDial from '@material-ui/lab/SpeedDial';
import SpeedDialIcon from '@material-ui/lab/SpeedDialIcon';
import SpeedDialAction from '@material-ui/lab/SpeedDialAction';
import { FaBuilding, FaUserPlus, FaHammer, FaUserCircle } from 'react-icons/fa';

// action menu styles
const useStyles = makeStyles(theme => ({
  speedDial: {
    position: 'absolute',
    '&.MuiSpeedDial-directionUp': {
      bottom: theme.spacing(4),
      right: theme.spacing(3)
    },
    '& > .MuiFab-primary': {
      color: '#fff',
      backgroundColor: '#2d3b4f'
    }
  },
  icons: {
    backgroundColor: '#2d3b4f',
    color: '#fff',
    margin: '0.8rem',
    transform: 'scale(1.3)',
    fontSize: '1.3rem'
  }
}));

// define an array of actions
let actions = [];

// Floating Action Btn Component
export default function FloatingActions() {
  // bring in styling
  const classes = useStyles();

  // open/close state of the menu
  const [open, setOpen] = React.useState(false);

  // bring in userType from state
  const { type } = useSelector(state => state.getUserReducer.user);
  const userType = type;

  // open action menu
  const handleOpen = () => {
    setOpen(true);
  };

  // close action menu
  const handleClose = () => {
    setOpen(false);
  };

  // Setup conditional actions
  // Landlord FAB actions:
  if (userType === 'landlord') {
    actions = [
      {
        icon: <FaBuilding />,
        name: 'Add Property',
        path: '/dashboard/properties/add'
      },
      {
        icon: <FaUserPlus />,
        name: 'Add Tenant',
        path: '/dashboard/tenants/add'
      },
      {
        icon: <FaHammer />,
        name: 'Add Work Order',
        path: '/dashboard/workorders/add'
      },
      {
        icon: <FaUserCircle />,
        name: 'User Profile',
        path: '/dashboard/profile'
      }
    ];
  }

  // Tenant FAB actions:
  if (userType === 'tenant') {
    actions = [
      {
        icon: <FaHammer />,
        name: 'Add Work Order',
        path: '/dashboard/workorders/add'
      },
      {
        icon: <FaUserCircle />,
        name: 'User Profile',
        path: '/dashboard/profile'
      }
    ];
  }

  if (actions.length > 0) {
    return (
      <SpeedDial
        ariaLabel="Action menu toggle"
        className={classes.speedDial}
        icon={<SpeedDialIcon />}
        onClose={handleClose}
        onOpen={handleOpen}
        direction="up"
        open={open}
      >
        {actions.map(action => (
          <SpeedDialAction
            className={classes.icons}
            key={action.name}
            icon={action.icon}
            tooltipTitle={action.name}
            onClick={() => {
              navigate(action.path);
              handleClose();
            }}
          />
        ))}
      </SpeedDial>
    );
  }

  return null;
}
