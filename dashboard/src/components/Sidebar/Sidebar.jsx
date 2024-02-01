/* eslint-disable react/prop-types */

import './Sidebar.css'
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import MuiDrawer from '@mui/material/Drawer';
import { styled, useTheme } from '@mui/material/styles';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupOutlinedIcon from '@mui/icons-material/GroupOutlined';
import ContactsOutlinedIcon from '@mui/icons-material/ContactsOutlined';
import ReceiptOutlinedIcon from '@mui/icons-material/ReceiptOutlined';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import PieChartOutlineOutlinedIcon from '@mui/icons-material/PieChartOutlineOutlined';
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined';
import MapOutlinedIcon from '@mui/icons-material/MapOutlined';
import { Avatar, Typography } from '@mui/material';
import {useLocation, useNavigate} from 'react-router-dom'
import { grey } from '@mui/material/colors';

import mazen from '../../assets/MAZEN.jpg'

const drawerWidth = 240; 

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});




const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));





const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const array1 = [
  {text: "Dashboard", path: "/", icon: <HomeOutlinedIcon />},
  {text: "Manage Team", path: "/team", icon: <GroupOutlinedIcon />},
  {text: "Contacats Information", path: "/contact", icon: <ContactsOutlinedIcon />},
  {text: "Inovacies Balance", path: "/inovacies", icon: <ReceiptOutlinedIcon />},

];


const array2 = [
  {text: "Profile Form", path: "/profile", icon: <Person2OutlinedIcon />},
  {text: "Calender", path: "/calendar", icon: <CalendarTodayOutlinedIcon />},
  {text: "FAQ Page", path: "/faq", icon: <HelpOutlineOutlinedIcon />},

];

const array3 = [
  {text: "Bar Chart", path: "/barChart", icon: <BarChartOutlinedIcon  />},
  {text: "Pie Chart", path: "/pieChart", icon: <PieChartOutlineOutlinedIcon />},
  {text: "Line Chart", path: "/lineChart", icon: <TimelineOutlinedIcon />},
  {text: "Geography chart", path: "/geographyChart", icon: <MapOutlinedIcon />},

];

const darkColor = grey[800]
const lightColor = grey[300]

function Sidebar({handleDrawerClose, open}) {
  const theme = useTheme();
  const navigate = useNavigate()
  const location = useLocation()
  
  
  return (

    <Drawer variant="permanent" open={open}>
      <DrawerHeader>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
        </IconButton>
      </DrawerHeader>

      <Divider />
      <Avatar sx={{ mx: "auto", width: open ? 70 : 50, height: open ? 70 : 50, my: ".5rem", border: "1px solid gray" }}
        alt="Mazen Ahmed" src={mazen} />
      <Typography align='center' sx={{ fontSize: open ? "16px" : "0px", fontWeight: "bold", transition: ".3s" }}>
        Mazen
      </Typography>
      <Typography align='center' sx={{fontSize: open ? "12px" : "0px", color: theme.palette.info.main}}>Admin</Typography>


      <Divider />

      <List>
        {array1.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>

            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: item.path === location.pathname ?     
                  theme.palette.mode === "dark" ?   darkColor : lightColor
                : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
              {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>

          </ListItem>
        ))}
      </List>

      <Divider />

      <List>
        {array2.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: item.path === location.pathname ?     
                  theme.palette.mode === "dark" ?   darkColor : lightColor
                  : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />

      <List>
        {array3.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ display: 'block' }}>
            <ListItemButton
              onClick={() => {
                navigate(item.path)
              }}
              sx={{
                minHeight: 48,
                justifyContent: open ? 'initial' : 'center',
                px: 2.5,
                bgcolor: item.path === location.pathname ?     
                  theme.palette.mode === "dark" ?   darkColor : lightColor
                : "",
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : 'auto',
                  justifyContent: 'center',
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.text} sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      

    </Drawer>

  )
}

export default Sidebar;






