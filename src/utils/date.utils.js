export const formatDateMessage = timestamp => {
  const options = { day: 'numeric', month: 'numeric', year: 'numeric' };
  
  return timestamp.toLocaleDateString(undefined, options).split(' ').join('/');
};