import firebase from '../firebaseConfig.js';
import 'firebase/auth';

const auth = firebase.auth();

export const checkIfUserAuth = endFunc => {
  return auth.onAuthStateChanged(user => {
    endFunc(!!user, user);
  })
}

export const signWithProvider = nameProvider => {
  const provider = new firebase.auth[`${nameProvider}AuthProvider`]();
  
  return auth.signInWithPopup(provider)
};