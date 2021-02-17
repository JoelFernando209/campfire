import React from 'react';

import ChannelItem from './ChannelItem/ChannelItem';

import classes from './ChannelsList.module.scss';

const ChannelsList = () => {
  
  return (
    <div className={classes.ChannelsList}>
      <ChannelItem nameChannel='test' />
      <ChannelItem nameChannel='test epicO' />
      <ChannelItem nameChannel='test epicO' />
    </div>
  )
};

export default ChannelsList;