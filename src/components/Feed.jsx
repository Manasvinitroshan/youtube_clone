import {useState, useEffect} from 'react';
import {Box,Stack, Typography} from '@mui/material';
import SideBar from './SideBar';
import Videos from './Videos';

function Feed() {
  return (
    <Stack sx={{ flexDirection: { sx: "column", md: "row" }, }}>


      <Box sx={{ height: { sx: 'auto', md: "auto" }, BorderRight: '1px solid #3s3d3d', px: { sx: 0, md: 2 } }}>

        <SideBar />

        <Typography className="copyright" variant="body2" sx={{ mt: 1.5, color: '#fff' }}>

          Copyright YT-Clone MS 2023

        </Typography>


      </Box>

      <Box p={2} sx={{ overflowY: 'auto', height: '90vh', flex: 2 }}>
        <Typography variant="h4" fontWeight={"bold"} mb={2} mr={2} color="white">
          Sport <span style={{ color: '#F31504' }}>Videos</span>
        </Typography>

        <Videos videos={[]} />
      </Box>

    </Stack>
  );
}


export default Feed
