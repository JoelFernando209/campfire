import React, { useEffect } from 'react';
import { connect } from 'react-redux';

import ChatHeader from './ChatHeader/ChatHeader';
import ChatContent from './ChatContent/ChatContent';

import * as actions from '../../../../store/actions/index';

const ChatChannel = ({ currentChannel, onGetCurrentChannel, idChannel, phoneStatusActivate }) => {
  useEffect(() => {
    const isCurrentChannelEmpty = !Object.keys(currentChannel).length;
    
    if(isCurrentChannelEmpty) {
      onGetCurrentChannel(idChannel)
    }
  }, []);
  
  const nameChannel = Object.keys(currentChannel).length > 0 ? currentChannel.nameChannel : ''
  
  return (
    <>
      <ChatHeader nameChannel={nameChannel} clickedBurger={phoneStatusActivate} />
        
      <ChatContent idChannel={idChannel} />
    </>
  )
};

const mapStateToProps = state => ({
  currentChannel: state.channels.currentChannel
});

const mapDispatchToProps = dispatch => ({
  onGetCurrentChannel: idChannel => dispatch(actions.getCurrentChannel(idChannel))
});

export default connect(mapStateToProps, mapDispatchToProps)(ChatChannel);