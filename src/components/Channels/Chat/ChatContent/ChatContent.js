import React from 'react';

import classes from './ChatContent.module.scss';

import ChatMessage from './ChatMessage/ChatMessage';

const ChatContent = () => {
  return (
    <div className={classes.ChatContent}>
      <div style={{ flex: '1' }}></div>
  
      <ChatMessage />
    </div>
  )
};

export default ChatContent;