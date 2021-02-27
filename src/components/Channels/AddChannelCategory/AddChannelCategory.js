import React from 'react';
import Mentions from 'antd/lib/mentions';

import classes from './AddChannelCategory.module.scss';

const { Option } = Mentions;

const AddChannelCategory = ({ setCategoryValue, categoryValue, sortedCategories }) => {
  const mapCategoriesToOptions = sortedCategories.map(category => (
    <Option key={category} value={category}>
      {category}
    </Option>
  ))
  
  const onCategoriesChange = value => {
    setCategoryValue(value);
  }
  
  return (
    <Mentions
      style={{ width: '100%', marginBottom: '2rem' }}
      placeholder="Use # next to your category to search available categories"
      prefix={'#'}
      className={classes.TextareaCategory}
      onChange={onCategoriesChange}
      value={categoryValue}
    >
      {mapCategoriesToOptions}
    </Mentions>
  )
};

export default AddChannelCategory;