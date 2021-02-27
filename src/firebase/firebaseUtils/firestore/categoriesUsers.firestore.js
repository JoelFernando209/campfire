import firebase from '../../firebaseConfig';
import 'firebase/firestore';

import { getUidSync, runFuncWhenUserLoaded } from '../firebase.auth';

const db = firebase.firestore();

export const doCategoryDontExists = (uid, cb) => {
  db.collection('categoriesUsers')
    .doc(uid)
    .get()
    .then(categories => {
      if(!categories.exists) {
        cb(categories);
      }
    })
    .catch(err => {
      console.log(err.message);
    })
};

export const doCategoryExists = (uid, cb) => {
  db.collection('categoriesUsers')
    .doc(uid)
    .get()
    .then(categories => {
      if(categories.exists) {
        cb(categories);
      }
    })
    .catch(err => {
      console.log(err.message);
    })
};

export const saveNewCategory = arrCategory => {
  const uid = getUidSync();
  
  doCategoryDontExists(uid, () => {
    db.collection('categoriesUsers')
      .doc(uid)
      .set({
        categories: arrCategory,
        uid
      })
      .catch(err => {
        console.log(err.message);
      })
  })
};

export const getCurrentCategories = setState => {
  runFuncWhenUserLoaded(user => {
    doCategoryExists(user.uid, categoriesDoc => {
      setState(categoriesDoc.data().categories);
    })
  })
};