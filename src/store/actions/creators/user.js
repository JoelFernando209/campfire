import * as actionTypes from '../actionTypes';

import { checkIfUserAuth } from '../../../firebase/firebaseUtils/firebase.auth';

export const setAuth = value => ({
  type: actionTypes.SET_AUTH,
  value
});

export const setSignState = value => ({
  type: actionTypes.SET_SIGN_STATE,
  value
});

export const declareAuthAndSignPopup = () => {
  return dispatch => {
    checkIfUserAuth(auth => {
      dispatch(setAuth(auth));
      dispatch(setSignState(!auth));
    });
  };
};

export const setUserInfo = user => ({
  type: actionTypes.SET_USER_INFO,
  user
});

export const getUserData = () => {
  return dispatch => {
    checkIfUserAuth((auth, user) => {
      if(auth) {
        const infoUser = {
          name: user.displayName,
          uid: user.uid,
          urlProfile: user.photoURL
        };
        
        dispatch(setUserInfo(infoUser))
      }
    })
  }
}