import {  Typography } from "@mui/material";
import { Paper, Stack } from "@mui/material"
import EmailIcon from '@mui/icons-material/Email';
import PointOfSaleIcon from '@mui/icons-material/PointOfSale';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import TrafficIcon from '@mui/icons-material/Traffic';

import './Dashboard.css'
import DashPie from "./DashPie";

export default function Row1() {

    return (
    < div >

      <Stack direction={"row"} sx={{flexWrap: "wrap",maxWidth: "100%", gap: 2,mt: 5 }}>
        
        <Paper sx={{ minWidth: "333px", p: 1.5, borderRadius: ".5rem", display: "flex", justifyContent: "space-between", flexGrow: 1  }}>
          
          <Stack sx={{gap: 1}}>
            <EmailIcon />
            <Typography>12,361</Typography>
            <Typography>Email Sent</Typography>
          </Stack>
          
          <Stack sx={{alignItems: "center"}}>
            <DashPie />
            <Typography>+14%</Typography>
          </Stack>



        </Paper>
        
        <Paper sx={{ minWidth: "333px", p: 1.5, borderRadius: ".5rem", display: "flex", justifyContent: "space-between", flexGrow: 1  }}>
          
          <Stack sx={{gap: 1}}>
            <PointOfSaleIcon />
            <Typography>12,361</Typography>
            <Typography>Sales obtained</Typography>
          </Stack>
          
          <Stack sx={{alignItems: "center"}}>
            <DashPie />
            <Typography>+14%</Typography>
          </Stack>



        </Paper>

        <Paper sx={{minWidth: "333px", p: 1.5, borderRadius: ".5rem", display: "flex", justifyContent: "space-between", flexGrow: 1 }}>
          
          <Stack sx={{gap: 1}}>
            <PersonAddIcon />
            <Typography>12,361</Typography>
            <Typography>New Clients</Typography>
          </Stack>
          
          <Stack sx={{alignItems: "center"}}>
            <DashPie />
            <Typography>+14%</Typography>
          </Stack>



        </Paper>

        <Paper sx={{minWidth: "333px", p: 1.5, borderRadius: ".5rem", display: "flex", justifyContent: "space-between", flexGrow: 1 }}>
          
          <Stack sx={{gap: 1}}>
            <TrafficIcon />
            <Typography>12,361</Typography>
            <Typography>Traffic Received</Typography>
          </Stack>
          
          <Stack sx={{alignItems: "center"}}>
            <DashPie />
            <Typography>+14%</Typography>
          </Stack>



        </Paper>
      
      </Stack>

    </div>
  )
}
