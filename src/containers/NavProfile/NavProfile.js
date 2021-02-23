import React, { useState } from 'react';
import { RiArrowDropDownLine } from 'react-icons/ri';
import { connect } from 'react-redux';

import classes from './NavProfile.module.scss';

import NavConfig from './NavConfig/NavConfig';

const NavProfile = ({ user: { name, urlProfile } }) => {
  const [ configStatus, setConfigStatus ] = useState();
  
  const toggleConfig = () => {
    setConfigStatus(!configStatus);
  };
  
  return (
    <div className={classes.NavProfile}>
      { urlProfile && <div className={classes.ProfileImgContainer}>
        <img src={urlProfile} alt='' className={classes.ProfileImg}/>
      </div>}
      
      <div className={classes.ProfileName}>{name}</div>
      
      <RiArrowDropDownLine color='white' onClick={toggleConfig}/>
      
      <NavConfig status={configStatus} />
    </div>
  )
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(NavProfile);