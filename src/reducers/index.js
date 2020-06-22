import {combineReducers} from 'redux';
import users from './users';
import login from './login';
import userInfo from './userInfo';

export default combineReducers({
  userInfo,
  users,
  login,
});
