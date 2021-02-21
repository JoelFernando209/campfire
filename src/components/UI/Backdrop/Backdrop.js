import React from 'react';

import classes from './Backdrop.module.scss';

const Backdrop = ({ show, children, desactivate }) => {
  let styleBackdrop = {
    visibility: 'hidden',
    opacity: '0'
  };
  
  if(show) {
    styleBackdrop = {
      visibility: 'visible',
      opacity: '1'
    }
  }
  
  return (
    <div style={styleBackdrop} className={classes.Parent}>
      <div className={classes.Backdrop} onClick={desactivate}></div>
      
      {children}
    </div>
  );
};

export default Backdrop;