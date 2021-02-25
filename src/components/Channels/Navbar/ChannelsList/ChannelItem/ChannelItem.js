import React from 'react';
import { Link } from 'react-router-dom';

import classes from './ChannelItem.module.scss';

import ChannelPhoto from './ChannelPhoto/ChannelPhoto';

const ChannelItem = ({ channelId, nameChannel, clicked }) => (
  <Link to={`/channels/${channelId}`}>
    <div className={classes.ChannelItem} onClick={clicked}>
      <ChannelPhoto photoName={nameChannel} />
      
      <div className={classes.Title}>{nameChannel}</div>
    </div>
  </Link>
);

export default ChannelItem;