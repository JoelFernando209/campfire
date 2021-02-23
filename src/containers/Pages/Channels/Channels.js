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

const Channels = ({ onCheckAuthAndPopup, onGetUserData, channels }) => {
  const [ errorSign, setErrorSign ] = useState('');
  const [ addChannelState, setAddChannelState ] = useState(false);
  const [ errorPopup, setErrorPopup ] = useState('');
  
  const [ categoryValue, setCategoryValue ] = useState('');
  const [ descValue, setDescValue ] = useState('');
  const [ nameValue, setNameValue ] = useState('');
  
  const [ isSearchFocus, setIsSearchFocus ] = useState(false);
  const [ filteredChannels, setFilteredChannels ] = useState([]);
  
  useEffect(() => {
    onCheckAuthAndPopup();
    onGetUserData();
  }, []);
  
  const addChannelMethods = setStateMethods(setAddChannelState);
  const searchFocusMethods = setStateMethods(setIsSearchFocus);
  
  const changeDescValue = event => {
    setDescValue(event.target.value);
  }
  
  const changeNameValue = event => {
    setNameValue(event.target.value);
  }
  
  const filterSearch = event => {
    const searchQuery = event.target.value;
    
    if(searchQuery.trim().length) {
      setFilteredChannels( channels.filter(channel =>
        channel.nameChannel.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    } else {
      setFilteredChannels(channels);
    }
  }
  
  return (
    <div className={classes.Channels}>
      <Navbar
        onAddChannelClick={addChannelMethods.activate}
        isSearchFocus={isSearchFocus}
        searchFocusMethods={searchFocusMethods}
        filteredChannels={filteredChannels}
        filterSearch={filterSearch}
      />
      <Chat />
      <SignPopup errorSign={errorSign} setErrorSign={setErrorSign} />
      <AddChannelPopup
        status={addChannelState}
        desactivate={addChannelMethods.desactivate}
        setCategoryValue={setCategoryValue}
        categoryValue={categoryValue}
        descValue={descValue}
        changeDescValue={changeDescValue}
        nameValue={nameValue}
        changeNameValue={changeNameValue}
        errorPopup={errorPopup}
        setErrorPopup={setErrorPopup}
      />
    </div>
  )
};

const mapStateToProps = state => ({
  channels: state.channels.channels
});

const mapDispatchToProps = dispatch => ({
  onCheckAuthAndPopup: () => dispatch(actions.declareAuthAndSignPopup()),
  onGetUserData: () => dispatch(actions.getUserData())
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);