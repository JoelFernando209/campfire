import * as actionTypes from '../actions/actionTypes';

const initialState = {
  auth: false,
  signState: false,
  user: {
    name: '',
    uid: '',
    urlProfile: ''
  },
  categories: []
};

const setAuth = (state, action) => {
  return {
    ...state,
    auth: action.value
  }
};

const setSignState = (state, action) => {
  return {
    ...state,
    signState: action.value
  }
}

const setUserInfo = (state, { user }) => {
  return {
    ...state,
    user: {
      name: user.name,
      uid: user.uid,
      urlProfile: user.urlProfile
    }
  }
}

const setCategories = (state, action) => {
  return {
    ...state,
    categories: action.categories
  }
}

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_CATEGORIES: return setCategories(state, action)
    
    case actionTypes.SET_USER_INFO: return setUserInfo(state, action);
    
    case actionTypes.SET_AUTH: return setAuth(state, action);
    
    case actionTypes.SET_SIGN_STATE: return setSignState(state, action);
    
    default: return state;
  }
};

export default reducer;