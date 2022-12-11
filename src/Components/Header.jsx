import { AppBar, Box, Toolbar, Typography, Button, ThemeProvider } from '@mui/material'
import theme from '../themes/registerButtonTheme'
import React from 'react'
import ButtonSX from '../themes/ButtonSX';
import { Link } from "react-router-dom";
import { Visibility } from '@mui/icons-material';
import MenuComponent from './Menu/MenuComponent';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectAuth } from '../Redux/slices/AuthSlice.js';



const Header = (props) => {

    const dispatch = useDispatch()
    const isAuth = useSelector(selectAuth)

    const onClickLogOut = () => {
        console.log(dispatch)
        if (window.confirm('Вы уверены, что хотите выйти из своего аккаунта?')) {
            dispatch(logout())
            window.localStorage.removeItem("token",)
        }
    }

    return (
        <Box sx={{ flexGrow: 1, maxWidth: '100%' }}>
            <AppBar position='fixed' sx={{ top: "0", left: "0", zIndex: "50" }}>
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", }}>
            
                    <MenuComponent />

                    <Link to="/" style={{ textDecoration: 'none', }}>
                        <Box sx={{ display: { xs: "none", sm: "none", md: "inline", lg: "inline", xl: "inline" } }}>
                            <Typography variant="h6" component="div" sx={{ color: "white", }}>
                                OnlyDrums
                            </Typography>
                        </Box>
                    </Link>

                    {isAuth ? (
                        <>
                            <Box>
                                <Link href="/auth/login" style={ {textDecoration: "none"} }>
                                    <Button color="inherit" sx={{ color: "white", mr: 2, "&:hover": { color: 'red' } }}>
                                        Поделиться открытием
                                    </Button>
                                </Link>

                                <Button onClick={onClickLogOut} sx={{ color: 'black', backgroundColor: 'whitesmoke', "&:hover": { color: 'orange' } }} > Выйти </Button>
                            </Box>
                        </>
                    ) : (
                        <>
                            <Box>
                                <Link to="/auth/login" style={{ textDecoration: 'none' }}>
                                    <Button color="inherit" sx={{ color: "white", mr: 2, "&:hover": { color: 'red' } }}>Login</Button>
                                </Link>

                                <Link to="/auth/register" style={{ textDecoration: 'none' }}>
                                    <Button sx={{ color: 'black', backgroundColor: 'whitesmoke', "&:hover": { color: 'orange' } }} > Регистрация </Button>
                                </Link>
                            </Box>
                        </>
                    )
                    }

                    {/* <IconButton size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}>
                        <AccountCircle />
                    </IconButton> */}

                </Toolbar>
            </AppBar>
        </Box>
    )
}



export default Header