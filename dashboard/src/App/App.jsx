import * as React from 'react';
import { styled} from '@mui/material/styles';
import Box from '@mui/material/Box';

import MuiAppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
// import Typography from '@mui/material/Typography';

// import Navbar
import Navbar from '../components/Navbar/Navbar';
import Sidebar from '../components/Sidebar/Sidebar';

// import dark & light mode files
import {ThemeProvider, createTheme} from '@mui/material/styles'


import getDesignTokens from '../components/Navbar/DarkMode';
import { Outlet } from 'react-router-dom';

const drawerWidth = 240;



const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));




const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export default function App() {

  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const [mode, setMode] = React.useState(
    localStorage.getItem("currentTheme") ? 
      localStorage.getItem("currentTheme") :
      "dark"
    );
  const theme = React.useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: 'flex' }}>
          
          <CssBaseline />
          
        <Navbar open={open} handleDrawerOpen={handleDrawerOpen} AppBar={AppBar}
          setMode={setMode}
        />
        <Sidebar handleDrawerClose={handleDrawerClose} open={open}/>
          
          <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
            <DrawerHeader />
            <Outlet />
          </Box>
        </Box>
      </ThemeProvider>
  );
}

