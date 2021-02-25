import React from 'react';

import NoChannelRocket from '../../../../assets/noChannel.svg';

import classes from './NoChannel.module.scss';

const NoChannel = () => (
  <div className={classes.NoChannel}>
    <img src={NoChannelRocket} alt='' />
    
    <div>No channel selected.</div>
  </div>
);

export default NoChannel;