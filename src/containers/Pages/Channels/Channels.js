import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Channels.module.scss';

import Navbar from '../../../components/Channels/Navbar/Navbar';
import Chat from '../../../components/Channels/Chat/Chat';
import SignPopup from '../../../components/SignPopup/SignPopup';
import AddChannelPopup from '../../../components/Channels/AddChannelPopup/AddChannelPopup';

import * as actions from '../../../store/actions/index';

import { checkIfUserAuth } from '../../../firebase/firebaseUtils/firebase.auth';
import { setStateMethods } from '../../../utils/style.utils';

const Channels = ({ onCheckAuthAndPopup, onGetUserData }) => {
  const [ errorSign, setErrorSign ] = useState('');
  const [ addChannelState, setAddChannelState ] = useState(false);
  const [ categoryValue, setCategoryValue ] = useState('');
  const [ errorPopup, setErrorPopup ] = useState('');
  
  useEffect(() => {
    onCheckAuthAndPopup();
    onGetUserData();
  }, []);
  
  const addChannelMethods = setStateMethods(setAddChannelState);
  
  return (
    <div className={classes.Channels}>
      <Navbar onAddChannelClick={addChannelMethods.activate} />
      <Chat />
      <SignPopup errorSign={errorSign} setErrorSign={setErrorSign} />
      <AddChannelPopup
        status={addChannelState}
        desactivate={addChannelMethods.desactivate}
        setCategoryValue={setCategoryValue}
        categoryValue={categoryValue}
        errorPopup={errorPopup}
        setErrorPopup={setErrorPopup}
      />
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  onCheckAuthAndPopup: () => dispatch(actions.declareAuthAndSignPopup()),
  onGetUserData: () => dispatch(actions.getUserData())
});

export default connect(null, mapDispatchToProps)(Channels);