const initialState = {
 products: [],
 categories: [],
 groups: [],
 err: ''
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "FETCH_GROUPS":{
      return {...state, groups: action.payload.groups}
    }
    case "FETCH_GROUPS_FAIL":{
      return {...state, err: action.payload.err}
    }
    case "FETCH_PRODUCTS":{
      return {...state, products: action.payload.products}
    }
    case "FETCH_PRODUCTS_FAIL":{
      return {...state, err: action.payload.err}
    }
    case "FETCH_CATEGORIES":{
      return {...state, categories: action.payload.categories}
    }
    case "FETCH_CATEGORIES_FAIL":{
      return {...state, err: action.payload.err}
    }
    default: {
      return state
    }
  }
}