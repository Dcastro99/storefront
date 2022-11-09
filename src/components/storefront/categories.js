import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { productSlice } from '../../store/productSlice'
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { categoryTabs } from '../dummyData/data'

function Categories() {
  const dispatch = useDispatch();
  const [currentTabs, setCurrentTabs] = useState('electronics');

  const handleCategoryPicked = (e, value) => {
    setCurrentTabs(value);
    dispatch(productSlice.actions.selectCategory(value));
    // console.log('VALUE', value);
  }
  // console.log('item', categoryTabs);

  return (
    <Box >
      <Typography> Browse our Categories</Typography>
      <Tabs sx={{ color: 'black' }} value={currentTabs} onChange={handleCategoryPicked}>
        {categoryTabs.map((data, key) => (
          <Tab key={key} label={data.title} value={data.value} />
        ))}
      </Tabs>
    </Box>
  )
}

export default Categories;