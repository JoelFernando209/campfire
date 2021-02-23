import React from 'react';

import classes from './ChatMessage.module.scss';

import Input from '../../../../UI/Input/Input';
import Button from '../../../../UI/Button/Button';

import { MdSend } from 'react-icons/md';
import { HiEmojiHappy } from 'react-icons/hi';

const ChatMessage = () => {
  
  return (
    <label className={classes.ChatMessage}>
      <Input typeInput='input' placeholder='Type a message here' type='text' style={{ borderRadius: '1rem', marginTop: '1rem' }} />
      
      <div className={classes.EmojiButton}>
        <HiEmojiHappy color='#ccc' />
      </div>
      
      <Button btnType='blue' className={classes.SendButton}>
        <MdSend color='white' />
      </Button>
    </label>
  );
};

export default ChatMessage;