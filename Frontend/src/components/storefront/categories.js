import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { productSlice } from '../../store/productSlice'
import { Box, Typography, Tabs, Tab } from '@mui/material';
import { categoryTabs } from '../../assets/dummyData/data'


const styles = {
  title: {
    padding: '10px'
  }
}

function Categories() {
  const dispatch = useDispatch();
  const [currentTabs, setCurrentTabs] = useState('all');

  const handleCategoryPicked = (e, value) => {
    setCurrentTabs(value);
    dispatch(productSlice.actions.selectCategory(value));

  }
  return (
    <Box >
      <Typography sx={styles.title} variant="h2"> Browse our Categories</Typography>
      <Tabs textColor="inherit" TabIndicatorProps={{ style: { backgroundColor: 'salmon' } }} sx={{
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