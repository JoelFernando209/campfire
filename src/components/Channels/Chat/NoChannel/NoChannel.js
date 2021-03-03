import React from 'react';

import NoChannelRocket from '../../../../assets/noChannel.svg';
import ChatHeader from '../ChatChannel/ChatHeader/ChatHeader';

import classes from './NoChannel.module.scss';

const NoChannel = ({ phoneStatusActivate }) => (
  <>
    <ChatHeader nameChannel='' clickedBurger={phoneStatusActivate} />
  
    <div className={classes.NoChannel}>
    
      <img src={NoChannelRocket} alt='' />
      
      <div>No channel selected.</div>
    </div>
  </>
);

export default NoChannel;