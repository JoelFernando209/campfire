import React from 'react';
import Menu from 'antd/lib/menu';

import classes from './Navbar.module.scss';

import AddChannel from './AddChannel/AddChannel';
import SearchBox from './SearchBox/SearchBox';
import ChannelsList from './ChannelsList/ChannelsList';
import NavProfile from '../../../containers/NavProfile/NavProfile';
import ChannelInfo from './ChannelInfo/ChannelInfo';

const Navbar = ({ onAddChannelClick, isSearchFocus, searchFocusMethods, filterSearch, filteredChannels, channelInfoStatus, activateChannelInfo, desactivateChannelInfo }) => {
  
  return (
    <div className={classes.Navbar}>
      <ChannelInfo status={channelInfoStatus} desactivate={desactivateChannelInfo} />
      <AddChannel clicked={onAddChannelClick} />
      <SearchBox focus={searchFocusMethods.activate} change={filterSearch} />
      <ChannelsList isSearchFocus={isSearchFocus} filteredChannels={filteredChannels} activateChannelInfo={activateChannelInfo} />
      <NavProfile />
    </div>
  )
};

export default Navbar;