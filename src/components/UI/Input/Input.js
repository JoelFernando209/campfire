import React from 'react';

import classes from './Input.module.scss';

const Input = ({ typeInput, type, placeholder, style, value, change }) => {
  let inputElement = null;
  
  switch (typeInput) {
    case 'input':
      inputElement = <input onChange={change} value={value} className={classes.Input} style={style} type={type} placeholder={placeholder} />
    break;
      
    case 'textarea':
      inputElement = <textarea onChange={change} value={value} className={classes.Input} style={style} placeholder={placeholder}></textarea>
    break;
    
    default:
      inputElement = <input onChange={change} value={value} className={classes.Input} style={style} type={type} placeholder={placeholder} />
  }
  
  return inputElement;
};

export default Input;