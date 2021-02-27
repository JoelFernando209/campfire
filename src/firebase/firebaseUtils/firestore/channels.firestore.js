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
      console.log(err);
    })
};

export const getChannel = idChannel => {
  return db.collection('channels')
    .doc(idChannel)
    .get();
}

export const doChannelNameAlreadyExists = (name, cb) => {
  db.collection('channels')
    .where('nameChannel', '==', name)
    .get()
    .then(snapshot => {
      if(snapshot.docs.length > 0) {
        cb(true);
      } else {
        cb(false);
      }
    })
    .catch(err => {
      console.log(err.message);
    })
}