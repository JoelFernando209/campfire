import React from 'react';

import { MdSearch } from 'react-icons/md';

import classes from './SearchBox.module.scss';

const SearchBox = () => {
  
  return (
    <label className={classes.SearchBox} htmlFor='search'>
      <MdSearch color='white' />
      
      <input type='text' placeholder='Search' id='search' />
    </label>
  )
};

export default SearchBox;