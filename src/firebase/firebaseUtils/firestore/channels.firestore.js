import firebase from '../../firebaseConfig';
import 'firebase/firestore';

import { getUidSync } from '../firebase.auth';

const db = firebase.firestore();

export const getChannels = () => db.collection('channels').get();

export const saveNewChannel = (nameChannel, descChannel, categoriesArr) => {
  return db.collection('channels')
    .add({
      nameChannel,
      descChannel,
      categoriesArr,
      uid: getUidSync()
    })
    .catch(err => {
      console.log(err.message);
    })
};

export const getChannel = idChannel => {
  return db.collection('channels')
    .doc(idChannel)
    .get();
}