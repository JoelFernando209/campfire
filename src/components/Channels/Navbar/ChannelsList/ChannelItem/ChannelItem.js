import React from 'react';

import classes from './ChannelItem.module.scss';

import ChannelPhoto from './ChannelPhoto/ChannelPhoto';

const ChannelItem = ({ nameChannel, clicked }) => (
  <div className={classes.ChannelItem} onClick={clicked}>
    <ChannelPhoto photoName={nameChannel} />
    
    <div className={classes.Title}>{nameChannel}</div>
  </div>
);

export default ChannelItem;