export const valueIsInArr = (value, arr) => arr.some(item => item === value);

export const hasDuplicates = arr => (new Set(arr)).size !== arr.length;