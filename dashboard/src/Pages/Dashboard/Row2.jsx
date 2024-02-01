/* eslint-disable react/prop-types */
import { Box, Paper, Stack, Typography, useTheme } from "@mui/material";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import Line  from '../LineChart/Line'; 

// eslint-disable-next-line no-unused-vars
export default function Row2({isDashboard}) {
  const theme = useTheme();
  return (
    <div style={{ marginTop :"1rem"}}>
      
      <Stack direction={"row"} sx={{gap: 2}}>

        <Paper sx={{ width: "70%", padding: "1rem"}}>
          <Box className = "d-flex align-items-center justify-content-between" >
            <Typography sx={{ color: theme.palette.secondary.main, fontWeight: "bold", fontSize: "1.2rem" }}>
              Revenue Generated
            </Typography>
            <DownloadOutlinedIcon />
          </Box>
          <Typography>$59,342.32</Typography>

          <Box>
            <Line isDashboard={true } />
          </Box>

        </Paper>


        <Paper sx={{width: "30%", maxHeight: "364.8px", overflowY: "auto"}}>
          <Paper className="mt-2 p-2">Recent Transactions</Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

          <Paper className="mt-2 d-flex align-items-center justify-content-between p-2">
            <Box>
              <Typography>01e4dsaewf</Typography>
              <Typography>johndoe</Typography>
            </Box>
            <Typography>2021-09-01</Typography>
            <Box sx={{backgroundColor: theme.palette.warning.dark, p: 1, borderRadius: ".2rem"}}>$43.91</Box>
          </Paper>

        </Paper>

      </Stack>


    </div>
  )
}