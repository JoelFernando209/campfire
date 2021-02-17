import React from 'react';

import classes from './Chat.module.scss';

import ChatHeader from './ChatHeader/ChatHeader';

const Chat = () => (
  <div className={classes.Chat}>
    <ChatHeader nameChannel='test name' />
  </div>
);

export default Chat;