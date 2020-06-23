const initialState = {
  token : null,
  logged: null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":{ 
      return {...state, token: action.payload.token.data, logged: true}
    }
    case "LOGIN_FAIL":{
      return {...state, logged: false}
    }
    default: {
      return state
    }
  }
}