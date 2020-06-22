const initialState = {
  userinfo : []
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USER":{ 
      return {...state, userinfo: action.payload.userinfo
      }
    }
    default: {
      return state
    }
  }
}