/* eslint-disable react/prop-types */
import SearchIcon from '@mui/icons-material/Search';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import { styled, alpha, useTheme } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
// import Navbar Css file
import './Navbar.css';
import { Box, Stack } from '@mui/material';

import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import LightModeOutlinedIcon from '@mui/icons-material/LightModeOutlined';

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));





const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));



const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}))


function Navbar({ open, handleDrawerOpen, AppBar, setMode }) {
  
  const theme = useTheme();


  return (
    <AppBar position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" noWrap component="div">
          
        </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
        </Search>
        
        <Box flexGrow={1} />

          <Stack direction={'row'}>

          
          {theme.palette.mode === "light" ?
            <IconButton color='inherit' onClick={() => {
                localStorage.setItem("currentTheme", (theme.palette.mode === "dark") ? "light" : "dark")
                setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              )}
              }
                >
              
              <LightModeOutlinedIcon />

            </IconButton>
            :
            <IconButton color='inherit' onClick={() => {
                localStorage.setItem("currentTheme", (theme.palette.mode === "dark") ? "light" : "dark")
                setMode((prevMode) =>
                prevMode === 'light' ? 'dark' : 'light',
              )}
              }
            >
              <DarkModeOutlinedIcon/>
            </IconButton>
          }

            <IconButton color='inherit' >
              <NotificationsOutlinedIcon />
            </IconButton>

            <IconButton color='inherit' >
              <SettingsOutlinedIcon />
            </IconButton>

            <IconButton color='inherit' >
              <Person2OutlinedIcon />
            </IconButton>
          
          </Stack>


      </Toolbar>
    </AppBar>
  )
}

export default Navbar;
