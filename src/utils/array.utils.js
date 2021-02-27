export const valueIsInArr = (value, arr) => arr.some(item => item === value);

export const hasDuplicates = arr => (new Set(arr)).size !== arr.length;

export const divideMessageInMultiple = message => message.match(/.{1,200}/g);

export const isPropInArrDuplicate = (arr, propName) => {
  const valueArr = arr.map(item => item[propName]);
  
  return hasDuplicates(valueArr);
}