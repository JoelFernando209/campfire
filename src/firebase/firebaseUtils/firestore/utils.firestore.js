export const formatDocsToData = docs => docs.map(doc => ({ ...doc.data(), id: doc.id }) );

export const formatDocToData = doc => ({ ...doc.data(), id: doc.id });

export const filterMessagesDuplicates = arr => arr.filter((v,i,a)=>a.findIndex(t=>(t.urlProfile === v.urlProfile && t.nameProfile===v.nameProfile))===i)

export const setMembersBasedOnMessages = messages => {
  const formattedMessages = messages.map(message => ({ id: message.id, photoURL: message.urlProfile, nameProfile: message.authorName }));
  
  return filterMessagesDuplicates(formattedMessages);
};