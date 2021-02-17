import React from 'react';

import classes from './Channels.module.scss';

import Navbar from '../../../components/Channels/Navbar/Navbar';
import Chat from '../../../components/Channels/Chat/Chat';

const Channels = () => {
  
  return (
    <div className={classes.Channels}>
      <Navbar />
      <Chat />
    </div>
  )
};

export default Channels;