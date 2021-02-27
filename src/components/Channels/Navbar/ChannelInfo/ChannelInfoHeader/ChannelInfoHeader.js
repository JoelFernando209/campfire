import React from 'react';
import { MdKeyboardArrowLeft } from 'react-icons/md';

import classes from './ChannelInfoHeader.module.scss';

const ChannelInfoHeader = ({ clicked }) => (
  <div className={classes.ChannelInfoHeader} onClick={clicked}>
    <MdKeyboardArrowLeft style={{ marginRight: '1.5rem' }} />
    
    <div className={classes.Title}>All channels</div>
  </div>
);

export default ChannelInfoHeader;