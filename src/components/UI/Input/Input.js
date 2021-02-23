import React from 'react';

import classes from './Input.module.scss';

const Input = ({ typeInput, type, placeholder, style, value, change, attr }) => {
  let inputElement = null;
  
  switch (typeInput) {
    case 'input':
      inputElement = <input onChange={change} value={value} className={classes.Input} style={style} type={type} placeholder={placeholder} {...attr}/>
    break;
      
    case 'textarea':
      inputElement = <textarea onChange={change} value={value} className={classes.Input} style={style} placeholder={placeholder} {...attr}></textarea>
    break;
    
    default:
      inputElement = <input onChange={change} value={value} className={classes.Input} style={style} type={type} placeholder={placeholder}  {...attr}/>
  }
  
  return inputElement;
};

export default Input;