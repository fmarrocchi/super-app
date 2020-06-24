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
  try {
    let products = await api.get('/products', {token: {token}});
    dispatch({
      type: 'FETCH_PRODUCTS',
      payload: {products: products.data}
    });
  }
  catch(err) {
    dispatch({ type: 'FETCH_PRODUCTS_FAIL', payload: err }) 
  }
}

export const fetchCategories = (token, id) => async (dispatch) => {
  try { 
    let categories = await api.get(`/categories?groupId=${id}`,  { token: {token}});
    dispatch({
      type: 'FETCH_CATEGORIES',
      payload: {categories: categories.data}
    });
  }
  catch(err) {
    dispatch({ type: 'FETCH_CATEGORIES_FAIL', payload: err }) 
  }
}

export const fetchSubCategories = (token, category) => async (dispatch) => {
  try { 
    let subcategories = await api.get(`/subcategories?categoryId=${category}`, {token: {token}} );
    let all = {id:subcategories.data.length+1, categoryId: category, name: "Todos"};
    let subcat = {...subcategories.data, all};
    console.log("subcat: "+subcat);
    dispatch({
      type: 'FETCH_SUBCATEGORIES',
      payload: {subcategories: subcategories.data}
    });
  }
  catch(err) {
    dispatch({ type: 'FETCH_SUBCATEGORIES_FAIL', payload: err }) 
  }
}

export const fetchGroups = (token) => async (dispatch) => {
  try {
    let groups = await api.get('/groups', token);
    dispatch({
      type: 'FETCH_GROUPS',
      payload: {groups: groups.data}
    });
  }
  catch(err) {
    dispatch({ type: 'FETCH_GROUPS_FAIL', payload: err }) 
  }
}