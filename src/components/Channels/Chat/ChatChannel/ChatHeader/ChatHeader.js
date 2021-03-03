import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

import classes from './ChatHeader.module.scss';

const ChatHeader = ({ nameChannel, clickedBurger }) => (
  <div className={classes.AddChannel}>
    <div onClick={clickedBurger}>
      <GiHamburgerMenu className={classes.Burger} />
    </div>
  
    <div className={classes.Title}>{nameChannel}</div>
  </div>
);

export default ChatHeader;