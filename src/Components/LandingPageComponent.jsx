import { Box, Button, Typography, } from '@mui/material'
import React from 'react'
import { shadows, elevation, ThemeProvider } from '@mui/system';
import ButtonSX from '../themes/ButtonSX.js';
import MainTextSx from '../themes/MainTextSx';
import AppSX from '../themes/AppSX';
import { Link } from 'react-router-dom';


const LandingPageComponent = (props) => {

  return (
    <Box className="App" sx={AppSX}>
      <Box className='container' display='flex' justifyContent='center' alignItems='center' sx={{
        maxWidth: '900px',
        m: '0 auto', p: '10%', 
      }}>
        <Box className='landing_text' sx={{ minWidth: '300px' }}>
          
          <Typography variant='h1' component='p' sx={MainTextSx}>
            OnlyDrums - место, где ты можешь делиться своими открытиями в сфере драмминга, находить и загружать ноты для нужных песен.
          </Typography>
          
          <Link to="/auth/register" style={{ textDecoration: 'none' }}>
            <Button sx={ButtonSX}>
              стать частью корабля
            </Button>
          </Link>

        </Box>
      </Box>
    </Box>
  )
}

export default LandingPageComponent