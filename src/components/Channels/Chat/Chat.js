import React from 'react';
import { connect } from 'react-redux';

import classes from './Chat.module.scss';

import ChatHeader from './ChatHeader/ChatHeader';
import ChatContent from './ChatContent/ChatContent';

import Spinner from '../../UI/Spinner/Spinner';

const Chat = ({ currentChannel }) => {
  
  const nameChannel = Object.keys(currentChannel).length > 0 ? currentChannel.nameChannel : ''
  
  return (
    <div className={classes.Chat}>
      <ChatHeader nameChannel={nameChannel} />
      
      <ChatContent />
    </div>
  )
};

const mapStateToProps = state => ({
  currentChannel: state.channels.currentChannel
});

export default connect(mapStateToProps)(Chat);