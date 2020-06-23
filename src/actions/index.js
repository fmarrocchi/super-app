import api from '../api/api';

export const loginUser = (user) => async (dispatch) => {
  let token = "";
  try {
    token = await api.post('/login', user);
    dispatch({
      type: 'LOGIN_REQUEST',
      payload: {
        token
      }
    }) 
  }
  catch(err) {
    dispatch({
      type: 'LOGIN_FAIL'
    }) 
  }
}

export const fetchUsers = () => async (dispatch) => {
  const users = await api.get('/users');
  dispatch({ 
    type: 'FETCH_USERS',
    payload: {users: users.data}
  });
}


export const fetchUser = (email, token) => async (dispatch) => { 
  const userinfo = await api.get(`/users?email=${email}`, {token: {token}});
  dispatch({
    type: 'FETCH_USER',
    payload: {userinfo: userinfo.data}
  }) 
}