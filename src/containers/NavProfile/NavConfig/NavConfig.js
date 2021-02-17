import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { BiLogIn } from 'react-icons/bi';

import classes from './NavConfig.module.scss';

const NavConfig = ({ status }) => {
  let navStyles = {
    visibility: 'hidden',
    opacity: '0'
  };
  
  if(status) {
    navStyles = {
      visibility: 'visible',
      opacity: '1'
    };
  };
  
  return (
    <div className={classes.NavConfig} style={navStyles}>
      <div className={classes.ConfigItem}>
        <HiUserCircle color='white' />
        
        My Profile
      </div>
      
      <div className={[classes.ConfigItem, classes.Logout].join(' ')} style={{ color: '#EB5757' }}>
        <BiLogIn color='#EB5757' />
      
        Logout
      </div>
    </div>
  )
};

export default NavConfig;