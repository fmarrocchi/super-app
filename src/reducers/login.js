const initialState = {
  token : null
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":{ 
      return {...state, token: action.payload.token.data}
    }
    default: {
      return state
    }
  }
}