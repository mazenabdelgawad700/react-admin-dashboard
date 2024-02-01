import { Button} from "@mui/material"
import Row1 from "./Row1"

import Row2 from "./Row2"

import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

function Dashboard() {
  return (
    <div>

      <div style={{textAlign: "right"}}>
        <Button variant="contained"
          sx={{ padding: ".5rem 1rem", fontSize: "16px", textTransform: "capitalize" }}
          color= "primary"
        >
          
          <DownloadOutlinedIcon />
          Download Reports
        </Button>
      </div>
          <Row1 />
          <Row2 />
    </div>
  )
}

export default Dashboard
