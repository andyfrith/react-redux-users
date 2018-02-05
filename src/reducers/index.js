import { combineReducers } from 'redux';
import users from './userReducer';
import selectedUser from './selectedUserReducer';

const reducers = combineReducers({
  users,
  selectedUser
});

export default reducers;
