import React from 'react';

import Message from './Message/Message';

const MessageContainer = ({ messages }) => {
  
  const messagesElements = messages.map(message => (
    <Message
      key={message.id}
      srcProfile={message.urlProfile}
      nameAuthor={message.authorName}
      dateMessage='27 de Abril'
    >
      {message.message}
    </Message>
  ))
  
  return (
    <div style={{ flex: '1', overflow: 'auto' }} data-simplebar>
      {messagesElements}
    </div>
  )
}

export default MessageContainer;