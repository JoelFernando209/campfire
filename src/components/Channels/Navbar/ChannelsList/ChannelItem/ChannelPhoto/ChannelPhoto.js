import React from 'react';

import classes from './ChannelPhoto.module.scss';

const ChannelPhoto = ({ photoUrl, photoName }) => {
  let photoPortrait = null;
  let namePortrait = '';
  
  if(photoUrl) {
    photoPortrait = photoUrl;
  } else {
    photoName.split(' ').forEach(word => {
      namePortrait += word.charAt(0);
    });
  }
  
  return (
    <div className={classes.ChannelPhoto}>
      { photoPortrait ? <img src={photoPortrait} alt='Channel Photo cannot be loaded' /> : <div>{namePortrait}</div> }
    </div>
  );
};

export default ChannelPhoto;