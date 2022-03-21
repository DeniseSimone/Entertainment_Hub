import * as React from 'react';
import { useState, useEffect } from 'react'
import '../styles/MainNav.css'
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import MovieIcon from '@mui/icons-material/Movie';
import SearchIcon from '@mui/icons-material/Search';
import TvIcon from '@mui/icons-material/Tv';
import { useNavigate } from 'react-router-dom'


const SimpleBottomNavigation = () => {
  const [value, setValue] = useState(0);
  const navigate = useNavigate();

  useEffect(() => { // useEffect is going to be fired whenever 'value' changes
    if (value === 0) navigate("/");
    else if (value === 1) navigate("/movies");
    else if (value === 2) navigate("/Series");
    else if (value === 1) navigate("/search");
  }, [value, navigate])

  return (
    <Box className='box' >
      <BottomNavigation
        id='bottom-navigation'
        showLabels // showLabels === showLabels={true}
        value={value} // value is equal to state value, which  is equal to 0, and zero corresponds to the first BottomNavigationAction, so initally BottomNavigation is set to the first Nav element 
        onChange={(event, newValue) => { // this onChange event is telling what will happen when value state changes meaning from 0 to any other number corresponding any of the others BottomNavigationAction
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

export default SimpleBottomNavigation;

// SimpleBottomNavigation component was taken from 'Material UI'
// if showLabels={false} 'label' in <BottomNavigationAction/> will not be displayed on the screen
/* state 'value' is initially set to 0, and 0 corresponds to the FIRST <BottomNavigationAction />, 1 to the second, 2 to the third and 3 to the fourth BottomNavigationAction */
  // 'value' == 0 => Trending
  // 'value' == 1 => Movies
  // 'value' == 2 => TV Series
  // 'value' == 3 => Search

  /* useEffect explained:
    useEffect is going to be triggered whenever 'value' changes - (in this case value will change by user interection when clicking on one the navbar items) - if value == 0, meaning if the navitem clicked is
    the 1º one - trending - the browser will navigate to '/' -home -, if value == 1 browser will navigate to '/movies', if value == 2 browser will navigate to '/series' and if value == 3 browser will navigate 
    to 'search'
  */

  /* 
    useNavigate ???
  */