export const formatDocsToData = docs => docs.map(doc => ({ ...doc.data(), id: doc.id }) );

export const formatDocToData = doc => ({ ...doc.data(), id: doc.id });