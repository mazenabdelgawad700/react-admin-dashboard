import { Box, Typography } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { rows } from './data'
import SecurityOutlinedIcon from '@mui/icons-material/SecurityOutlined';
import AdminPanelSettingsOutlinedIcon from '@mui/icons-material/AdminPanelSettingsOutlined';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';





export default function Team() {
  const theme = useTheme();

  const columns = [
  
  {
    field: 'id',
    headerName: 'ID',
    align: "center",
    headerAlign: "center"
  },
  
  {
    field: 'name',
    headerName: 'Name',
    flex: 1,
    align: "center",
    headerAlign: "center"
  },
  
  {
    field: 'email',
    headerName: 'Email',
    flex: 1,
    align: "center",
    headerAlign: "center"
  },

  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    align: "center",
    headerAlign: "center"
  },

  {
    field: 'phone',
    headerName: 'Phone',
    flex: 1,
    align: "center",
    headerAlign: "center"
  },

  {
    field: 'access',
    headerName: 'Access',
    flex: 1,
    align: "center",
    headerAlign: "center",
    renderCell: ({row: {access}}) => {
      return (
        <Box sx={
          {
            color: "#fff !important",
            backgroundColor: access === "manager" || access === "Manager" ? theme.palette.secondary.dark :
              access === "user" || access === "User" ?    "#3da58a" :  access === "admin" || access === "Admin" ?
                theme.palette.info.main : "",
            padding: " .4rem  1rem",
            borderRadius: ".2rem",
            width: "120px",
            textAlign: "center",
            fontSize: "14px"
          }
        }>
          <div className='d-flex align-items-center justify-content-between text-center'>

            <span style={{fontSize: "10px"}}>{access === "admin" || access === "Admin" ? <AdminPanelSettingsOutlinedIcon />
              : access === "manager" || access === "Manager" ? <SecurityOutlinedIcon /> :   
                access === "user" || access === "User" ? <LockOpenOutlinedIcon /> : ""
            
            }
            </span>
            <span>{access}</span>

          </div>
          
        </Box>
      )
    }
  },

];


  return (
    <div style={{ height: 600, width: '98%', maxWidth: "100%",margin: "0 auto" }}>
      <Typography sx={{
        fontSize: "1.5rem", fontWeight: "bold", color: theme.palette.info.main,
        textTransform: "uppercase", letterSpacing: "-.1rem"
      }}>
        team</Typography>
      <Typography sx={{mb: "1.5rem"}}>Managing The Team Members</Typography>
      <DataGrid
        rows={rows}
        columns={columns}
      />
      </div>
  );
}