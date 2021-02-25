import React from 'react';

import classes from './Message.module.scss';

const Message = ({ srcProfile, nameAuthor, dateMessage, children }) => {
  
  const altProfile = nameAuthor.split(' ').slice(0, 1).join(' ');
  
  return (
    <div className={classes.Message}>
      <img src={srcProfile} alt={altProfile} className={classes.ProfileImg} />
      
      <div className={classes.Content}>
        <div className={classes.InfoAuthor}>
          <span className={classes.NameAuthor}>{nameAuthor}</span>
          
          <span className={classes.Date}>{dateMessage}</span>
        </div>
        
        <div className={classes.MessageContent}>{children}</div>
      </div>
    </div>
  )
};

export default Message;