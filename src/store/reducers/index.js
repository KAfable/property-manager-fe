import { combineReducers } from 'redux';
import authReducer from './authReducer';
import propReducer from './propReducer';
import getUserReducer from './getUserReducer';
<<<<<<< HEAD
=======
import workOrderReducer from './workOrderReducer';
>>>>>>> 9cf2a3e08699092acf8c5eeef10809b9445a9561

export default combineReducers({
  authReducer,
  propReducer,
  getUserReducer,
  workOrderReducer
});
