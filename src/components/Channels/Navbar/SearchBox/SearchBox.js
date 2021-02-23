import React from 'react';

import { MdSearch } from 'react-icons/md';

import classes from './SearchBox.module.scss';

const SearchBox = ({ value, change, focus, blur }) => {
  
  return (
    <label className={classes.SearchBox} htmlFor='search'>
      <MdSearch color='white' />
      
      <input
        type='text'
        placeholder='Search'
        id='search'
        onChange={change}
        value={value}
        onFocus={focus}
        onBlur={blur}
      />
    </label>
  )
};

export default SearchBox;