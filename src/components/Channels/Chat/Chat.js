import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Chat.module.scss';

import ChatChannel from './ChatChannel/ChatChannel';
import NoChannel from './NoChannel/NoChannel';

const Chat = ({ match }) => {
  let currentContent = <NoChannel />
  
  if(match.params.channelId) {
    currentContent = <ChatChannel idChannel={match.params.channelId} />;
  }
  
  return (
    <div className={classes.Chat}>
      {currentContent}
    </div>
  )
};

export default withRouter(Chat);