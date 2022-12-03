import React from 'react'
import { IconButton, Typography } from '@mui/material'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { MenuItem } from '@mui/material';
import { Menu } from '@mui/material';
import  MenuIcon  from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import BookIcon from '@mui/icons-material/Book';


const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export function MenuComponent(props) {
  const [profileMenu, setProfileMenu] = React.useState(null)
  return (
    <><IconButton
      size="large"
      edge="start"
      color="inherit"
      aria-label="menu"
      sx={{ mr: 2}}
      onClick={e => setProfileMenu(e.currentTarget)}
    >

      <MenuIcon />

    </IconButton><Menu
      id="profile-menu"
      open={Boolean(profileMenu)}
      anchorEl={profileMenu}
      onClose={() => setProfileMenu(null)}
      disableAutoFocusItem>
        <MenuItem
          component={Link}
          onClick={() => setProfileMenu(null)}
          to="/app/profile/changepassword"
        >
          <AccountBoxIcon fontSize= "large" sx = {{ m: "3px" }}/>
          <Typography>
            Я
          </Typography>
        </MenuItem>
        <MenuItem
          component={Link}
          onClick={() => setProfileMenu(null)}
          to="/posts"
        >
          <BookIcon fontSize='large' sx = {{ m: "3px" }} />
          <Typography>
            Блог
          </Typography>
        </MenuItem>
      </Menu></>
  )
}

export default MenuComponent