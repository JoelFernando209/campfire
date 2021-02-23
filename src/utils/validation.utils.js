import { valueIsInArr, hasDuplicates } from './array.utils';

const isInputNotEmpty = input => input.trim().length;

export const isAnyCategoryInvalid = (categoryArr, allCategories, setError) => {
  return categoryArr.some(category => {
    if(category.charAt(0) !== '#' || category.length <= 1) {
      setError(`${category} is invalid`);
      
      return true;
    }
    
    if(!valueIsInArr(category.substring(1), allCategories)) {
      setError(`${category} is not included in the options`)
      
      return true;
    }
    
    return false;
  })
};

export const validateInput = (nameInput, val, setError, minLength, maxLength) => {
  const inputVal = isInputNotEmpty(val);
  
  if(inputVal > maxLength) {
    setError(`The ${nameInput} has a maximum length of ${maxLength} characters`);
    
    return false;
  }
  
  if(inputVal < minLength) {
    setError(`The ${nameInput} needs a minimum length of ${minLength} characters`);
    
    return false;
  }
  
  if(!inputVal) {
    setError(`The ${nameInput} is required`);
    
    return false;
  }
  
  return true;
};

export const validateCategories = (categoryValue, setError, allCategories) => {
  const categoryArr = categoryValue.trim().split(' ');
  const resultValidation = [];
  
  if(isInputNotEmpty(categoryValue)) {
    resultValidation.push(true);
    
    resultValidation.push(!isAnyCategoryInvalid(categoryArr, allCategories, setError));
    
    if(hasDuplicates(categoryArr)) {
      setError('The categories are repeated');
      resultValidation.push(false);
    } else {
      resultValidation.push(true);
    }
  } else {
    resultValidation.push(false);
    
    setError('The categories are required');
  }
  
  return resultValidation.every(valid => valid);
};