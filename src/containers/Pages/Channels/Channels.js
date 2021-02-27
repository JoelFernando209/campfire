import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import classes from './Channels.module.scss';

import Navbar from '../../../components/Channels/Navbar/Navbar';
import Chat from '../../../components/Channels/Chat/Chat';
import SignPopup from '../../../components/SignPopup/SignPopup';
import AddChannelPopup from '../../../components/Channels/AddChannelPopup/AddChannelPopup';
import CategoriesPopup from '../../../components/Channels/CategoriesPopup/CategoriesPopup';

import * as actions from '../../../store/actions/index';

import { checkIfUserAuth } from '../../../firebase/firebaseUtils/firebase.auth';
import { setStateMethods } from '../../../utils/style.utils';
import { getCurrentCategories } from '../../../firebase/firebaseUtils/firestore/categoriesUsers.firestore';

const Channels = ({ onCheckAuthAndPopup, onGetUserData, channels, auth, categories, onSetCategories }) => {
  const [ errorSign, setErrorSign ] = useState('');
  const [ addChannelState, setAddChannelState ] = useState(false);
  const [ categoriesState, setCategoriesState ] = useState(false);
  const [ errorPopup, setErrorPopup ] = useState('');
  
  const [ categoryValue, setCategoryValue ] = useState('');
  const [ descValue, setDescValue ] = useState('');
  const [ nameValue, setNameValue ] = useState('');
  
  const [ categoryPopupValue, setCategoryPopupValue ] = useState('');
  const [ errorPopupCategories, setErrorPopupCategories ] = useState('');
  
  const [ isSearchFocus, setIsSearchFocus ] = useState(false);
  const [ filteredChannels, setFilteredChannels ] = useState([]);
  
  const [ channelInfoStatus, setChannelInfoStatus ] = useState(false);
  
  useEffect(() => {
    onCheckAuthAndPopup();
    onGetUserData();
  }, []);
  
  useEffect(() => {
    if(auth) {
      getCurrentCategories(onSetCategories);
    }
  }, [auth])
  
  useEffect(() => {
    if(localStorage.getItem('haveCategories')) {
      setCategoriesState(false);
    } else if(auth && categories.length === 0) {
      setCategoriesState(true);
    } else if(auth) {
      setCategoriesState(false);
      localStorage.setItem('haveCategories', true);
    } else {
      setCategoriesState(false);
    }
  }, [auth, categories])
  
  const addChannelMethods = setStateMethods(setAddChannelState);
  const categoriesMethods = setStateMethods(setCategoriesState);
  const searchFocusMethods = setStateMethods(setIsSearchFocus);
  const channelInfoMethods = setStateMethods(setChannelInfoStatus);
  
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
      setFilteredChannels([]);
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
        channelInfoStatus={channelInfoStatus}
        activateChannelInfo={channelInfoMethods.activate}
        desactivateChannelInfo={channelInfoMethods.desactivate}
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
      <CategoriesPopup
        status={categoriesState}
        desactivate={categoriesMethods.desactivate}
        categoryValue={categoryPopupValue}
        setCategoryValue={setCategoryPopupValue}
        errorPopup={errorPopupCategories}
        setErrorPopup={setErrorPopupCategories}
      />
    </div>
  )
};

const mapStateToProps = state => ({
  channels: state.channels.channels,
  auth: state.user.auth,
  categories: state.user.categories
});

const mapDispatchToProps = dispatch => ({
  onCheckAuthAndPopup: () => dispatch(actions.declareAuthAndSignPopup()),
  onGetUserData: () => dispatch(actions.getUserData()),
  onSetCategories: categories => dispatch(actions.setCategories(categories))
});

export default connect(mapStateToProps, mapDispatchToProps)(Channels);