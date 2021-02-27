import React from 'react';
import { connect } from 'react-redux';

import classes from './AddChannelPopup.module.scss';

import categoriesOptions from '../../../categoriesOptions';

import Input from '../../UI/Input/Input';
import Backdrop from '../../UI/Backdrop/Backdrop';
import Button from '../../UI/Button/Button';

import { validateCategories, validateInput } from '../../../utils/validation.utils';

import AddChannelCategory from '../AddChannelCategory/AddChannelCategory';

import * as actions from '../../../store/actions/index';

const AddChannelPopup = ({
  status,
  desactivate,
  setCategoryValue,
  categoryValue,
  descValue,
  changeDescValue,
  nameValue,
  changeNameValue,
  errorPopup,
  setErrorPopup,
  onSaveNewChannel
}) => {
  
  const sortedCategories = [ ...categoriesOptions ];
  
  sortedCategories.sort();
  
  const onSubmitCheckCategory = () => {
    const areCategoriesValid = validateCategories(categoryValue, setErrorPopup, sortedCategories);
    const isDescValid = validateInput('description', descValue, setErrorPopup, 20, 400);
    const isNameValid = validateInput('name', nameValue, setErrorPopup, 5, 12);
    
    if(areCategoriesValid && isDescValid && isNameValid) {
      setErrorPopup('');
      const categoryArr = categoryValue.trim().split(' ');
      
      const channelInfo = {
        nameChannel: nameValue,
        descChannel: descValue,
        categoriesArr: categoryArr
      }
      
      onSaveNewChannel(channelInfo, () => {
        desactivate();
      });
    }
  };
  
  return (
    <Backdrop show={status} desactivate={desactivate}>
      <div className={classes.AddChannelPopup}>
        <h3 className={classes.Title}>New Channel</h3>
        
        <Input typeInput='input' type='text' placeholder='Channel name' change={changeNameValue} />
        
        <Input typeInput='textarea' placeholder='Channel description' change={changeDescValue} />
        
        <AddChannelCategory setCategoryValue={setCategoryValue} categoryValue={categoryValue} sortedCategories={sortedCategories} />
        
        { errorPopup && <div style={{ color: 'red', marginBottom: '2rem' }}>{errorPopup}</div>}
        
        <Button btnType='cyan' clicked={onSubmitCheckCategory}>Save</Button>
      </div>
    </Backdrop>
  )
};

const mapDispatchToProps = dispatch => ({
  onSaveNewChannel: (channelInfo, endFunc) => dispatch(actions.addNewChannelDB(channelInfo, endFunc))
});

export default connect(null, mapDispatchToProps)(AddChannelPopup);