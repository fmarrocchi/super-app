const initialState = {
  token : null,
  logged: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":{ 
      return {...state, token: action.payload.token.data}
    }
    case "LOGIN_FAIL":{
      return {...state, logged: false}
    }
    case "LOGOUT":{
      return {...state, logged: false}
    }
    case "LOGIN_SUCCESS":{
      return {...state, logged: true}
    }
    default: {
      return state
    }
  }
}