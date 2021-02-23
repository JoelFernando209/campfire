import React from 'react';

import classes from './Input.module.scss';

const Input = ({ typeInput, type, placeholder, style }) => {
  let inputElement = null;
  
  switch (typeInput) {
    case 'input':
      inputElement = <input className={classes.Input} style={style} type={type} placeholder={placeholder} />
    break;
      
    case 'textarea':
      inputElement = <textarea className={classes.Input} style={style} placeholder={placeholder}></textarea>
    break;
    
    default:
      inputElement = <input className={classes.Input} style={style} type={type} placeholder={placeholder} />
  }
  
  return inputElement;
};

export default Input;