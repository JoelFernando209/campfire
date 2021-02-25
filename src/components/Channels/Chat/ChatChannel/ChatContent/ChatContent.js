import React, { useState, useEffect } from 'react';

import classes from './ChatContent.module.scss';

import ChatMessage from '../../../../../containers/Chat/ChatMessage/ChatMessage';
import MessageContainer from './MessageContainer/MessageContainer';

import { getMessagesFromChannel } from '../../../../../firebase/firebaseUtils/firestore/messages.firestore';
import { formatDocsToData } from '../../../../../firebase/firebaseUtils/firestore/utils.firestore';

import { addNewMessage, modifyMessage, removeMessage } from '../../../../../utils/immutable.utils';

const ChatContent = ({ idChannel }) => {
  const [ messages, setMessages ] = useState([]);
  
  useEffect(() => {
    getMessagesFromChannel(idChannel, snapshotMessages => {
      if(snapshotMessages.length > 0) {
        snapshotMessages.docChanges().forEach(change => {
          const currentMessage = change.doc.data();
          const currentMessageId = change.doc.id;
        
          switch(change.type) {
            case 'added':
              setMessages(addNewMessage(messages, currentMessage));
            break;
          
            case 'modified':
              setMessages(modifyMessage(messages, currentMessage, currentMessageId));
            break;
            
            case 'removed':
              setMessages(removeMessage(messages, currentMessageId));
            break;
            
            default:
              setMessages(addNewMessage(messages, currentMessage));
          }
        })
      } else {
        const messagesData = formatDocsToData(snapshotMessages.docs);
        
        setMessages(messagesData);
      }
    }, err => {
      console.log(err.message);
    })
  }, []);
  
  return (
    <div className={classes.ChatContent}>
      <MessageContainer messages={messages} />
      
      <ChatMessage idChannel={idChannel} />
    </div>
  )
};

export default ChatContent;