import {combineReducers} from 'redux';
import login from './login';
import userinfo from './userInfo';
import catalog from './catalog';

export default combineReducers({
  userinfo,
  login,
  catalog, 
});
