import firebase from '../../firebaseConfig';
import 'firebase/firestore';

import { getUidSync } from '../firebase.auth';

const db = firebase.firestore();

export const saveNewMessage = (channelId, authorName, urlProfile, uid, message) => {
  return db.collection('messages')
    .add({
      channelId,
      authorName,
      urlProfile,
      message,
      uid,
      date: new Date()
    })
    .catch(err => {
      console.log(err.message);
    })
}

export const getMessagesFromChannel = (idChannel, cb, errHandler) => {
  return db.collection('messages')
    .where('channelId', '==', idChannel)
    .limit(50)
    .orderBy('date', 'asc')
    .onSnapshot(cb, errHandler)
}