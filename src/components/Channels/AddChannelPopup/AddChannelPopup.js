import React from 'react';

import classes from './AddChannelPopup.module.scss';

import categoriesOptions from '../../../categoriesOptions';

import Input from '../../UI/Input/Input';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button';

import { valueIsInArr, hasDuplicates } from '../../../utils/array.utils';

import AddChannelCategory from './AddChannelCategory/AddChannelCategory';

const AddChannelPopup = ({ status, desactivate, setCategoryValue, categoryValue, errorPopup, setErrorPopup }) => {
      
  const sortedCategories = [ ...categoriesOptions ];
  
  sortedCategories.sort();
      
  const onSubmitCheckCategory = () => {
    const categoryArr = categoryValue.trim().split(' ');
    
    const isAnyCategoryInvalid = categoryArr.some(category => {
      if(category.charAt(0) !== '#' || category.length <= 1) {
        setErrorPopup(`${category} is invalid`);
        
       return true;
      }
      
      if(!valueIsInArr(category.substring(1), sortedCategories)) {
        setErrorPopup(`${category} is not included in the options`)
        
        return true;
      }
      
      return false;
    })
    
    const doCategoryArrHasDuplicates = hasDuplicates(categoryArr);
    
    if(doCategoryArrHasDuplicates) {
      setErrorPopup('The categories are repeated');
    }
    
    if(!isAnyCategoryInvalid && !doCategoryArrHasDuplicates && categoryArr.length) {
      console.log('SUCCESS')
      setErrorPopup('');
    }
  };
  
  return (
    <Backdrop show={status} desactivate={desactivate}>
      <div className={classes.AddChannelPopup}>
        <h3 className={classes.Title}>New Channel</h3>
        
        <Input typeInput='input' type='text' placeholder='Channel name' />
        
        <Input typeInput='textarea' placeholder='Channel description' />
        
        <AddChannelCategory setCategoryValue={setCategoryValue} categoryValue={categoryValue} sortedCategories={sortedCategories} />
        
        { errorPopup && <div style={{ color: 'red', marginBottom: '2rem' }}>{errorPopup}</div>}
        
        <Button btnType='cyan' clicked={onSubmitCheckCategory}>Save</Button>
      </div>
    </Backdrop>
  )
};

export default AddChannelPopup;