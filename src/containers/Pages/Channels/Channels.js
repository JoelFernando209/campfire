import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Channels.module.scss';

import Navbar from '../../../components/Channels/Navbar/Navbar';
import Chat from '../../../components/Channels/Chat/Chat';
import SignPopup from '../../../components/SignPopup/SignPopup';

import * as actions from '../../../store/actions/index';

import { checkIfUserAuth } from '../../../firebase/firebaseUtils/firebase.auth';

const Channels = ({ onCheckAuthAndPopup, onGetUserData }) => {
  const [ errorSign, setErrorSign ] = useState('');
  
  useEffect(() => {
    onCheckAuthAndPopup();
    onGetUserData();
  }, []);
  
  return (
    <div className={classes.Channels}>
      <Navbar />
      <Chat />
      <SignPopup errorSign={errorSign} setErrorSign={setErrorSign} />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  onCheckAuthAndPopup: () => dispatch(actions.declareAuthAndSignPopup()),
  onGetUserData: () => dispatch(actions.getUserData())
});

export default connect(null, mapDispatchToProps)(Channels);