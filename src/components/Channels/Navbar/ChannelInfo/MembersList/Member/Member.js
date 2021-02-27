import React from 'react';

import classes from './Member.module.scss';

const Member = ({ urlProfile, nameUser }) => (
  <div className={classes.Member}>
    <div className={classes.PhotoContainer}>
      <img src={urlProfile} alt='' />
    </div>
    
    {nameUser}
  </div>
);

export default Member;