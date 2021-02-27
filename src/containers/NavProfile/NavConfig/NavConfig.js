import React from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { BiLogIn } from 'react-icons/bi';

import classes from './NavConfig.module.scss';

import { signOut } from '../../../firebase/firebaseUtils/firebase.auth';

const NavConfig = ({ status, toggleConfig }) => {
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
  
  const onSignOutHandler = () => {
    signOut();
    toggleConfig();
  };
  
  return (
    <div className={classes.NavConfig} style={navStyles}>
      <div className={[classes.ConfigItem, classes.Logout].join(' ')} style={{ color: '#EB5757' }} onClick={onSignOutHandler}>
        <BiLogIn color='#EB5757' />
      
        Logout
      </div>
    </div>
  )
};

export default NavConfig;