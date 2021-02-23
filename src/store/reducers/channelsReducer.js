import * as actionTypes from '../actions/actionTypes';

const initialState = {
  channels: []
};

const addNewChannel = (state, action) => {
  return {
    ...state,
    channels: state.channels.concat(action.channelInfo)
  }
};

const setChannels = (state, action) => {
  return {
    ...state,
    channels: action.channels
  }
};

const reducer = (state = initialState, action) => {
  switch(action.type) {
    case actionTypes.SET_CHANNELS: return setChannels(state, action)
    
    case actionTypes.ADD_NEW_CHANNEL: return addNewChannel(state, action)
    
    default: return state;
  }
};

export default reducer;