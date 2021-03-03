import React from 'react';
import { withRouter } from 'react-router-dom';

import classes from './Chat.module.scss';

import ChatChannel from './ChatChannel/ChatChannel';
import NoChannel from './NoChannel/NoChannel';

const Chat = ({ match, phoneStatusActivate }) => {
  let currentContent = <NoChannel phoneStatusActivate={phoneStatusActivate} />
  
  if(match.params.channelId) {
    currentContent = <ChatChannel idChannel={match.params.channelId} phoneStatusActivate={phoneStatusActivate} />;
  }
  
  return (
    <div className={classes.Chat}>
      {currentContent}
    </div>
  )
};

export default withRouter(Chat);