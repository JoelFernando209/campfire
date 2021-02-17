import React from 'react';
import Menu from 'antd/lib/menu';

import classes from './Navbar.module.scss';

import AddChannel from './AddChannel/AddChannel';
import SearchBox from './SearchBox/SearchBox';
import ChannelsList from './ChannelsList/ChannelsList';
import NavProfile from '../../../containers/NavProfile/NavProfile';

const Navbar = () => (
  <div className={classes.Navbar}>
    <AddChannel />
    <SearchBox />
    <ChannelsList />
    <NavProfile name='Joel Test' />
  </div>
);

export default Navbar;