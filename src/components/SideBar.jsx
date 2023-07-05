import {Stack} from '@mui/material';
import { categories } from "../utils/constants";
import React from 'react';

const selectedCategory = 'Sport';

export const SideBar = () => (
  
    <Stack 
    direction = "column" sx = {{ overflowY: "auto", 
    height : {sx:"auto", 
    md: "auto"}, 
    flexDirection: {sx: "row",md: "column"}, width:{sx:"auto",md:"25 %"}}}
    >
        {categories.map((category) => (

            <button

            className="category-btn"
            style = {{background : category.name === selectedCategory && '#FC1504',color : "white" }}
            key = {category.name}>
                <span style = {{marginRight: '15px',color: category.name === selectedCategory ? 'white' : 'red'}}>{category.icon}</span>
                <span>{category.name}</span>
                
            </button>
        ))}

    </Stack>
  
    
    )

    export default SideBar



