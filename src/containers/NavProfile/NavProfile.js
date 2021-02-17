import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';

import Logo from '../../assets/logo.png';

import classes from './NavProfile.module.scss';

import NavConfig from './NavConfig/NavConfig';

const NavProfile = ({ name }) => {
  const [ configStatus, setConfigStatus ] = useState();
  
  const toggleConfig = () => {
    setConfigStatus(!configStatus);
  };
  
  return (
    <div className={classes.NavProfile}>
      <div className={classes.ProfileImgContainer}>
        <img src={Logo} alt='' className={classes.ProfileImg}/>
      </div>
      
      <div className={classes.ProfileName}>{name}</div>
      
      <RiArrowDropDownLine color='white' onClick={toggleConfig}/>
      
      <NavConfig status={configStatus} />
    </div>
  )
};

export default NavProfile;