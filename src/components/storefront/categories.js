import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productSlice } from '../../store/productSlice'
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { categoryTabs } from '../dummyData/data'

function Categories() {
  const dispatch = useDispatch();
  const [currentTabs, setCurrentTabs] = useState('all');

  const handleCategoryPicked = (e, value) => {
    setCurrentTabs(value);
    dispatch(productSlice.actions.selectCategory(value));
    // console.log('VALUE', value);
  }
  // console.log('item', categoryTabs);

  return (
    <Box >
      <Typography sx={{ padding: '10px' }} variant="h2"> Browse our Categories</Typography>
      <Tabs TabIndicatorProps={{ style: { backgroundColor: 'salmon' } }} sx={{
        "& button": { borderRadius: 2 },
        // "& button:hover": { backgroundColor: "" },
        "& button:focus": { color: "salmon" },
        "& button:active": { color: "black" }
      }} value={currentTabs} onChange={handleCategoryPicked}>
        {categoryTabs.map((data, key) => (
          <Tab sx={{ color: 'rgb(60, 201, 226)' }} key={key} label={data.title} value={data.value} />
        ))}
      </Tabs>
    </Box >
  )
}

export default Categories;