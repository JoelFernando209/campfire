import React, { useState, useEffect, useRef } from 'react';

import classes from './ChatContent.module.scss';

import ChatMessage from '../../../../../containers/Chat/ChatMessage/ChatMessage';
import MessageContainer from './MessageContainer/MessageContainer';

import { getMessagesFromChannel } from '../../../../../firebase/firebaseUtils/firestore/messages.firestore';
import { formatDocsToData } from '../../../../../firebase/firebaseUtils/firestore/utils.firestore';

import { addNewMessage, modifyMessage, removeMessage } from '../../../../../utils/immutable.utils';

const ChatContent = ({ idChannel, auth }) => {
  const [ messages, setMessages ] = useState([]);
  
  const containerRef = useRef(null);
  
  const getMessages = channelId => {
    return getMessagesFromChannel(channelId, snapshotMessages => {
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
  }
  
  useEffect(() => {
    setMessages([]);
    const unsubscribeMessages = getMessages(idChannel);
    
    return () => {
      unsubscribeMessages();
    };
  }, [idChannel])
  
  const goToBottomOfContainer = () => {
    const containerElement = containerRef.current;
      
    containerElement.scrollTop = containerElement.scrollHeight - containerElement.clientHeight;
  };
  
  return (
    <div className={classes.ChatContent}>
      <MessageContainer
        messages={messages}
        idChannel={idChannel}
        goToBottomOfContainer={goToBottomOfContainer}
        ref={containerRef}
      />
      
      <ChatMessage idChannel={idChannel} goToBottomOfContainer={goToBottomOfContainer} />
    </div>
  )
};

export default ChatContent;