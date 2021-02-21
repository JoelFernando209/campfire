import React from 'react';

import { FcGoogle } from 'react-icons/fc';
import { AiFillGithub } from 'react-icons/ai';

import classes from './SignButtons.module.scss';

import Button from '../../UI/Button/Button';

const SignButtons = ({ clickedGoogle, clickedGithub }) => {
  const styleBtns = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  };
  
  return (
    <>
      <Button btnType='white' style={styleBtns} clicked={clickedGoogle} >
        <FcGoogle className={classes.Logo} />
        Sign in/Register with Google
      </Button>
      
      <Button btnType='dark' style={styleBtns} clicked={clickedGithub}>
        <AiFillGithub color='white' className={classes.Logo} />
        Sign in/Register with Github
      </Button>
    </>
  )
};

export default SignButtons;