import React from 'react';

import classes from './Button.module.scss';

const button = ({ children, btnType, clicked, style = {}, disabled, className }) => (
  <button
    className={[classes.Btn, classes[btnType], className].join(' ')}
    style={style}
    onClick={clicked}
    disabled={!!disabled}
  >
    {children}
  </button>
);

export default button;
