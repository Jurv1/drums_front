import logo from './logo.svg';
import './App.css';
import Header from './Components/Header.jsx';
import { Box, ThemeProvider } from '@mui/material';
import customTheme from './themes/theme.js'
import LandingPageComponent from './Components/LandingPageComponent.jsx';
import AppSX from './themes/AppSX';
import { Route, Routes } from 'react-router-dom';
import RegistraitionComponent from './Components/RegistraitionComponent';
import LoginComponent from './Components/LoginComponent';
import { PostsComponent } from './Components/Post/PostsComponent';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchAuthMe, selectAuth } from './Redux/slices/AuthSlice';




function App(props) {

  const dispatch = useDispatch()
  const isAuth = useSelector(selectAuth)

  useEffect(() => {
    dispatch(fetchAuthMe())
  }, [])

  return (
    <ThemeProvider theme={customTheme}>
      <Box className="App">
        <Header />
        <Routes>
          <Route path="/" element={< LandingPageComponent landingProps= {props.store.getState()}  />} />
          <Route path="/auth/register" element={< RegistraitionComponent/>} />
          <Route path="/auth/login" element={< LoginComponent />} />
          <Route path="/posts" element={<PostsComponent sx = {{ pt: "62px" }}/>} />
        </Routes>
      </Box>
    </ThemeProvider>
  );
}

export default App;
