import React from 'react';

import classes from './ChatHeader.module.scss';

const ChatHeader = ({ nameChannel }) => (
  <div className={classes.AddChannel}>
    <div className={classes.Title}>{nameChannel}</div>
  </div>
);

export default ChatHeader;