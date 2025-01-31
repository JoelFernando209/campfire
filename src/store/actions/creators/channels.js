import * as actionTypes from '../actionTypes';

import { saveNewChannel, getChannels, getChannel } from '../../../firebase/firebaseUtils/firestore/channels.firestore';
import { formatDocsToData, formatDocToData } from '../../../firebase/firebaseUtils/firestore/utils.firestore';

export const addNewChannel = channelInfo => ({
  type: actionTypes.ADD_NEW_CHANNEL,
  channelInfo
});

export const addNewChannelDB = (channelInfo, endFunc) => {
  return dispatch => {
    const { nameChannel, descChannel, categoriesArr } = channelInfo;
    
    saveNewChannel(nameChannel, descChannel, categoriesArr)
      .then(channel => {
        dispatch(addNewChannel({ ...channelInfo, id: channel.id }));
        endFunc()
      })
      .catch(err => {
        console.log(err.message);
      })
  };
};

export const setChannels = channels => ({
  type: actionTypes.SET_CHANNELS,
  channels
})

export const getChannelsDB = () => {
  return dispatch => {
    getChannels()
      .then(query => {
        const categoriesData = formatDocsToData(query.docs);
        
        dispatch(setChannels(categoriesData));
      })
      .catch(err => {
        console.log(err.message)
      })
  }
}

export const setCurrentChannel = channel => ({
  type: actionTypes.SET_CURRENT_CHANNEL,
  channel
});

export const setMembersCurrentChannel = members => ({
  type: actionTypes.SET_MEMBERS_CURRENT_CHANNEL,
  members
})

export const getCurrentChannel = idChannel => {
  return dispatch => {
    getChannel(idChannel)
      .then(channel => {
        const channelData = formatDocToData(channel);
        
        dispatch(setCurrentChannel(channelData))
      })
      .catch(err => {
        console.log(err.message)
      })
  };
}