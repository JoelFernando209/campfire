import React from 'react';
import { connect } from 'react-redux';

import classes from './CategoriesPopup.module.scss';

import categoriesOptions from '../../../categoriesOptions';

import Backdrop from '../../UI/Backdrop/Backdrop';
import AddChannelCategory from '../AddChannelCategory/AddChannelCategory';
import Button from '../../UI/Button/Button';

import { validateCategories } from '../../../utils/validation.utils';

import { saveNewCategory } from '../../../firebase/firebaseUtils/firestore/categoriesUsers.firestore';

import * as actions from '../../../store/actions/index';

const CategoriesPopup = ({ status, desactivate, categoryValue, setCategoryValue, errorPopup, setErrorPopup, onSetCategories }) => {
  const sortedCategories = [ ...categoriesOptions ];
  
  sortedCategories.sort();
  
  const onSubmitCategories = () => {
    const areCategoriesValid = validateCategories(categoryValue, setErrorPopup, sortedCategories);
    
    if(categoryValue.split(' ').length > 6) {
      setErrorPopup('You can only have 6 categories');
    } else if(categoryValue.split(' ').length <= 2) {
      setErrorPopup('You need a minimum of 3 categories')
    } else if(areCategoriesValid) {
      const categoriesArr = categoryValue.trim().split(' ');
      
      setErrorPopup('');
      desactivate();
      
      saveNewCategory(categoriesArr);
      onSetCategories(categoriesArr);
    }
  };
  
  return (
    <Backdrop show={status} desactivate={desactivate}>
      <div className={classes.CategoriesPopup}>
        <h3 className={classes.Title}>Find the channels you are interested in!</h3>
        <div className={classes.Subtitle}>Give us the categories you want and we recommend you the right things for you</div>
        
        <div className={classes.CategoryContainer}>
          <AddChannelCategory setCategoryValue={setCategoryValue} categoryValue={categoryValue} sortedCategories={sortedCategories} />
        </div>
        
        <Button btnType='dark' style={{ width: '30%', margin: '0 auto', display: 'block' }} clicked={onSubmitCategories}>
          Submit
        </Button>
        
        <div className={classes.Skip} onClick={desactivate}>Skip by now</div>
        
        { errorPopup && <div style={{ marginTop: '1.5rem', color: 'red', textAlign: 'center' }}>{errorPopup}</div>}
      </div>
    </Backdrop>
  )
};

const mapDispatchToProps = dispatch => ({
  onSetCategories: categories => dispatch(actions.setCategories(categories))
});

export default connect(null, mapDispatchToProps)(CategoriesPopup);