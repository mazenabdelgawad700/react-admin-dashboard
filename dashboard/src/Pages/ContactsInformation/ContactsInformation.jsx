import { Typography } from '@mui/material';
import { DataGrid,GridToolbar } from '@mui/x-data-grid';
import { useTheme } from '@mui/material/styles';
import { rows } from './data'


export default function ContactsInformation() {
  const theme = useTheme();

  const columns = [
  
  {
    field: 'id',
    headerName: 'ID',
    align: "center",
    headerAlign: "center"
  },
  
  {
    field: 'register',
    headerName: 'Register',
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
    field: 'email',
    headerName: 'Email',
    flex: 1,
    align: "center",
    headerAlign: "center"
  },

  {
    field: 'address',
    headerName: 'Address',
    flex: 1,
    align: "center",
    headerAlign: "center"
  },

  {
    field: 'city',
    headerName: 'City',
    flex: 1,
    align: "center",
    headerAlign: "center"
  },


  {
    field: 'zipcode',
    headerName: 'Zipcode',
    flex: 1,
    align: "center",
    headerAlign: "center",
  },

];


  return (
    <div style={{ height: 600, width: '98%', maxWidth: "100%",margin: "0 auto" }}>
      <Typography sx={{
        fontSize: "1.5rem", fontWeight: "bold", color: theme.palette.info.main,
        textTransform: "uppercase", letterSpacing: "-.1rem"
      }}>
        contacts
      </Typography>
      <Typography sx={{mb: "1.5rem"}}>List of Contacts for Future Reference</Typography>
      <DataGrid
        slots={
          {
            toolbar: GridToolbar
          }} 
        rows={rows}
        columns={columns}
      />
      </div>
  );
}
