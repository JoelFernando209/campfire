import React, { useState, useEffect, useRef } from 'react';
import { connect } from 'react-redux';

import classes from './ChatContent.module.scss';

import ChatMessage from '../../../../../containers/Chat/ChatMessage/ChatMessage';
import MessageContainer from './MessageContainer/MessageContainer';

import { getMessagesFromChannel } from '../../../../../firebase/firebaseUtils/firestore/messages.firestore';
import { formatDocsToData, setMembersBasedOnMessages } from '../../../../../firebase/firebaseUtils/firestore/utils.firestore';

import { addNewMessage, modifyMessage, removeMessage } from '../../../../../utils/immutable.utils';

import * as actions from '../../../../../store/actions/index';

const ChatContent = ({ idChannel, auth, onSetMembers }) => {
  const [ messages, setMessages ] = useState([]);
  
  const containerRef = useRef(null);
  
  const getMessages = channelId => {
    return getMessagesFromChannel(channelId, snapshotMessages => {
      const messagesData = formatDocsToData(snapshotMessages.docs);
      
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
        setMessages(messagesData);
      }
      
      onSetMembers(setMembersBasedOnMessages(messagesData))
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

const mapDispatchToProps = dispatch => ({
  onSetMembers: members => dispatch(actions.setMembersCurrentChannel(members))
});

export default connect(null, mapDispatchToProps)(ChatContent);