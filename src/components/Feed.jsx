import {useState, useEffect} from 'react';
import {Box,Stack, Typography} from '@mui/material';
import { SideBar } from './SideBar';

const Feed = () => {
  return (
    <Stack sx = {{ flexDirection: {sx: "column", md: "row"}}}>
    

      <Box sx= {{height: {sx: 'auto', md: '92vh'}, BorderRight: '1px solid #3s3d3d', px: {sx:0,md:2}}}>

      

        <Typography className= "copyright" variant ="body2" sx = {{mt:1.5, color: '#fff'}}>

          Copyright YT-Clone MS 2023

        </Typography>
        </Box >
      </Stack>
  )
}


export default Feed
