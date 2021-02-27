import React, { useEffect, useRef } from 'react';

import Message from './Message/Message';

let firstTime = true;

const MessageContainer = React.forwardRef((props, ref) => {
  useEffect(() => {
    firstTime = true;
  }, [props.idChannel])
  
  useEffect(() => {
    if(firstTime && props.messages.length > 0) {
      props.goToBottomOfContainer();
      
      firstTime = false;
    }
  }, [props.messages])
  
  const messagesElements = props.messages.map(message => (
    <Message
      key={message.id}
      srcProfile={message.urlProfile}
      nameAuthor={message.authorName}
      dateMessage={message.date.toDate()}
    >
      {message.message}
    </Message>
  ))
  
  return (
    <div style={{ flex: '1', overflow: 'auto' }} ref={ref}>
      {messagesElements}
    </div>
  )
})

export default MessageContainer;