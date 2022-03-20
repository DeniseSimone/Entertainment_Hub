import * as React from 'react';
import { useState } from 'react'
import '../styles/MainNav.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState(0);

  return (
    <Box className='box' >
      <BottomNavigation
        id='bottom-navigation'
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction style={{ color: '#fff'}} className='menu-item' label="Trending" icon={<WhatshotIcon />} />
        <BottomNavigationAction style={{ color: '#fff'}} className='menu-item' label="Movies" icon={<MovieIcon />} />
        <BottomNavigationAction style={{ color: '#fff'}} className='menu-item' label="TV Series" icon={<TvIcon />} />
        <BottomNavigationAction style={{ color: '#fff'}} className='menu-item' label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Box>
  );
}