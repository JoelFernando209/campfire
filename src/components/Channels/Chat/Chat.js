import React from 'react';

import classes from './Chat.module.scss';

import ChatHeader from './ChatHeader/ChatHeader';

import Spinner from '../../UI/Spinner/Spinner';

const Chat = () => (
  <div className={classes.Chat}>
    <ChatHeader nameChannel='test name' />
    
    <Spinner />
  </div>
);

export default Chat;