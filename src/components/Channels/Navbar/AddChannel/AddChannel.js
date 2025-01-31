import React from 'react';
import { MdAdd } from 'react-icons/md'

import classes from './AddChannel.module.scss';

const AddChannel = ({ clicked }) => {
  
  return (
    <div className={classes.AddChannel}>
      <div className={classes.Title}>Channels</div>
      
      <div className={classes.AddButton} onClick={clicked}>
        <MdAdd color='white' />
      </div>
    </div>
  );
}

export default AddChannel;