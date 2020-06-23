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
    });
    //localStorage.setItem(JWT, token);
    //history.pushState('/categories');
    dispatch({type: "LOGIN_SUCCESS"});
  }
  catch(err) {
    dispatch({ type: 'LOGIN_FAIL' }) 
  }
}

export const logout = () => (dispatch) => {
  //localStorage.removeItem(JWT);
  dispatch( { type: "LOGOUT"})
}

export const fetchUser = (email, token) => async (dispatch) => { 
  const userinfo = await api.get(`/users?email=${email}`, {token: {token}});
  dispatch({
    type: 'FETCH_USER',
    payload: {userinfo: userinfo.data}
  }) 
}

export const fetchCatalog = () => async (dispatch, getState) => {
  const state = await getState();
  dispatch({
    type: "FETCH_CATALOG", 
  })
}

export const fetchProducts = (token) => async (dispatch) => {
  const products = await api.get('/products', token);
  dispatch({ 
    type: 'FETCH_PRODUCTS',
    payload: {products: products.data}
  });
}