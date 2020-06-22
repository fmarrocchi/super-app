const initialState = {
  usersList : [],
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS":{ 
      return {...state, usersList: action.payload.users
      }
    }
    default: {
      return state
    }
  }
}