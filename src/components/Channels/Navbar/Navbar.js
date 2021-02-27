import React from 'react';
import Menu from 'antd/lib/menu';

import classes from './Navbar.module.scss';

import AddChannel from './AddChannel/AddChannel';
import SearchBox from './SearchBox/SearchBox';
import ChannelsList from './ChannelsList/ChannelsList';
import NavProfile from '../../../containers/NavProfile/NavProfile';

const Navbar = ({ onAddChannelClick, isSearchFocus, searchFocusMethods, filterSearch, filteredChannels }) => {
  
  return (
    <div className={classes.Navbar}>
      <AddChannel clicked={onAddChannelClick} />
      <SearchBox focus={searchFocusMethods.activate} change={filterSearch} />
      <ChannelsList isSearchFocus={isSearchFocus} filteredChannels={filteredChannels} />
      <NavProfile />
    </div>
  )
};

export default Navbar;