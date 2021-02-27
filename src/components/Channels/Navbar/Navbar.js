import React from 'react';
import { RiArrowGoBackFill } from 'react-icons/ri';

import classes from './Navbar.module.scss';

import AddChannel from './AddChannel/AddChannel';
import SearchBox from './SearchBox/SearchBox';
import ChannelsList from './ChannelsList/ChannelsList';
import NavProfile from '../../../containers/NavProfile/NavProfile';
import ChannelInfo from './ChannelInfo/ChannelInfo';

const Navbar = ({ onAddChannelClick, isSearchFocus, searchFocusMethods, filterSearch, filteredChannels, channelInfoStatus, activateChannelInfo, desactivateChannelInfo, phoneStatus, desactivatePhoneStatus }) => {
  const phoneMedia = window.matchMedia("(max-width: 46.875em)");
  const smPhoneMedia = window.matchMedia("(max-width: 32.5em)");
  
  let phoneStatusStyles = {};
  
  if(phoneStatus && smPhoneMedia.matches) {
    phoneStatusStyles = {
      width: '80%',
      opacity: '1',
      visibility: 'visible'
    };
  } else if(phoneStatus && phoneMedia.matches) {
    phoneStatusStyles = {
      width: '60%',
      opacity: '1',
      visibility: 'visible'
    };
  } else if (phoneMedia.matches) {
    phoneStatusStyles = {
      width: '0',
      opacity: '0',
      visibility: 'hidden'
    }
  }
  
  return (
    <>
      <div className={classes.Navbar} style={phoneStatusStyles}>
        <ChannelInfo status={channelInfoStatus} desactivate={desactivateChannelInfo} />
        <AddChannel clicked={onAddChannelClick} />
        <SearchBox focus={searchFocusMethods.activate} change={filterSearch} />
        <ChannelsList isSearchFocus={isSearchFocus} filteredChannels={filteredChannels} activateChannelInfo={activateChannelInfo} />
        <NavProfile />
      </div>
      
      {
        phoneStatus && phoneMedia.matches ?
          <div onClick={desactivatePhoneStatus} className={classes.DesactivatePhone}>
            <RiArrowGoBackFill color='#fff' />
          </div>
        :
          null
      }
    </>
  )
};

export default Navbar;