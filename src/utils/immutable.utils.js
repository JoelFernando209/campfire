const getMessageIndex = (arrMessages, messageId) => arrMessages.findIndex(current => current.id === messageId);

export const addNewMessage = (arrMessages, message) => arrMessages.concat(message);

export const modifyMessage = (arrMessages, message, messageId) => {
  const indexMessage = getMessageIndex(arrMessages, messageId);
  
  const messageContent = { ...arrMessages[indexMessage] };
  
  return [
    ...arrMessages,
    ([indexMessage]: {
      ...messageContent,
      message: message.message
    })
  ]
};

export const removeMessage = (arrMessages, messageId) => {
  const indexMessage = getMessageIndex(arrMessages, messageId);
   
  const newArrMessages = [ ...arrMessages ];
  
  return newArrMessages.splice(indexMessage, 1);
}