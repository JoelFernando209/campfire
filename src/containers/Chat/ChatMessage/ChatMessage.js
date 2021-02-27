import React, { useState } from 'react';
import { Picker } from 'emoji-mart'
import { connect } from 'react-redux';

import classes from './ChatMessage.module.scss';

import Input from '../../../components/UI/Input/Input';
import Button from '../../../components/UI/Button/Button';
import EmojiPicker from '../../../components/Channels/Chat/ChatChannel/ChatContent/EmojiPicker/EmojiPicker';

import { MdSend } from 'react-icons/md';
import { HiEmojiHappy } from 'react-icons/hi';

import { isInputNotEmpty } from '../../../utils/validation.utils';
import { divideMessageInMultiple } from '../../../utils/array.utils';
import { saveNewMessage } from '../../../firebase/firebaseUtils/firestore/messages.firestore';

const ChatMessage = ({ idChannel, user, goToBottomOfContainer }) => {
  const [ pickerState, setPickerState ] = useState(false);
  const [ messageValue, setMessageValue ] = useState('');
   
  const pickerStyles = {
    position: 'absolute',
    right: '6.5rem',
    bottom: '100%'
  };
  
  const togglePickerState = () => {
    setPickerState(!pickerState);
  }
  
  const onSelectEmoji = emoji => {
    setMessageValue(messageValue + emoji.native);
  }
  
  const changeMessageValue = event => {
    setMessageValue(event.target.value);
  }
  
  const sendMessageHandler = () => {
    if(isInputNotEmpty(messageValue) && messageValue.length < 2000) {
      if(messageValue.length >= 400) {
        const multipleMessages = divideMessageInMultiple(messageValue);
        
        multipleMessages.forEach(message => {
          saveNewMessage(idChannel, user.name, user.urlProfile, user.uid, message)
            .then(goToBottomOfContainer)
        })
      } else {
        saveNewMessage(idChannel, user.name, user.urlProfile, user.uid, messageValue)
          .then(goToBottomOfContainer)
      }
      
      setMessageValue('');
    }
  };
  
  return (
    <label className={classes.ChatMessage}>
      <Input typeInput='input' placeholder='Type a message here' type='text' style={{ borderRadius: '1rem', marginTop: '1rem' }} change={changeMessageValue} value={messageValue} />
      
      { pickerState && <EmojiPicker style={pickerStyles} select={onSelectEmoji} /> }
      
      <div className={classes.EmojiButton} onClick={togglePickerState}>
        <HiEmojiHappy color='#ccc' />
      </div>
      
      <Button btnType='blue' className={classes.SendButton} clicked={sendMessageHandler}>
        <MdSend color='white' />
      </Button>
    </label>
  );
};

const mapStateToProps = state => ({
  user: state.user.user
});

export default connect(mapStateToProps)(ChatMessage);