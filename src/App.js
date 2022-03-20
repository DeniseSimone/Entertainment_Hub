import { Container } from '@mui/material';
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// import components
import Header from './components/Header';
import SimpleBottomNavigation from './components/MainNav';
import Trending from './Pages/Trending/Trending';
import Movies from './Pages/Movies/Movies'
import Series from './Pages/Series/Series'
import Search from './Pages/Search/Search'

// import icons
// import { BsFillCameraReelsFill } from "react-icons/bs";
{/* <BsFillCameraReelsFill /> */}


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Container>
          <Routes>
            <Route path='/' component={Trending} exact/> {/* this route is given an exact keyword so that it doesn't overlap once it is also inside of the the other routes */}
            <Route path='/movies' component={Movies} />
            <Route path='/series' component={Series} />
            <Route path='/search' component={Search} />
          </Routes>
        </Container>
      </div>
      <SimpleBottomNavigation /> 
    </BrowserRouter>
    
  );
}

export default App;


/* 
1. <BrowserRouter></BrowserRouter> is used to wrap up all application that is going to be
inside of our router of our ReactRouterDOM, so the application needs to be wrapped with 
<BrowserRouter>

2. <Container></Container> is used to create the navigation 




1. Add BrowserRouter 
2. Create navigation inside the BrowserRouter
3. Container from Material UI 
*/

/* 
QUESTIONS:
- What is <BrowserRouter> used for?
- What is <Container> used for?
- What is <Switch> used for?
- What is <Route /> used for?
  - How to create routes?




*/