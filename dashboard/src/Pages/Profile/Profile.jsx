/* eslint-disable no-unused-vars */
import { useState } from "react";

import { useTheme } from "@emotion/react"
import { Alert, Button, Snackbar, Typography } from "@mui/material"

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

import {useForm } from 'react-hook-form'


export default function Profile() {
  const theme = useTheme();

  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  const [open, setOpen] = useState(false);


  const handleClick = () => {
    setOpen(true);
  }
  const handleClose = (reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };


  const onSubmit = () => {
    handleClick();
  }



const currencies = [
  {
    value: 'user',
    label: 'User',
  },
  {
    value: 'admin',
    label: 'Admin',
  },
  {
    value: 'manger',
    label: 'Manager',
  },

];


  return (
    <>
    <Typography sx={{
        fontSize: "1.5rem", fontWeight: "bold", color: theme.palette.info.main,
        textTransform: "uppercase", letterSpacing: "-.1rem"
      }}>
        create user
      </Typography>
      <Typography sx={{mb: "1.5rem", textTransform: "capitalize"}}>Create a new user profile</Typography>    

      <Box
        onSubmit={handleSubmit(onSubmit)}
        component="form"
        sx={{ m: 1, width: '100%',}}
        noValidate
        autoComplete="off"
      >


        <div className="d-flex justify-content-between align-items-center mb-5 gap-3">
          <TextField id="filled-basic" label="First Name" variant="filled"
            error={Boolean(errors.firstName)}
            // eslint-disable-next-line no-extra-boolean-cast
            helperText = {Boolean(errors.firstName) ?  "The Minmum Length Is 3 Characters" : "Required Falied"}
            {...register("firstName", { required: true, maxLength: 20, minLength: 3 })}
            
            sx={{ width: "48%", flex: 1 }} />
          
          <TextField id="filled-basic" label="Last Name" variant="filled"
            error={Boolean(errors.lastName)}
            // eslint-disable-next-line no-extra-boolean-cast
            helperText = {Boolean(errors.firstName) ?  "The Minmum Length Is 3 Characters" : "Required Falied"}
            {...register("lastName", { required: true, maxLength: 20, minLength: 3 })}

            sx={{ width: "48%", flex: 1 }} />
        </div>

        <TextField id="filled-basic" label="Email"
          
          error={Boolean(errors.email)}
          // eslint-disable-next-line no-extra-boolean-cast
          helperText = {Boolean(errors.email) ?  "Enter a vaild email" : "Required Falied"}
          {...register("email", { pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ })}
          
          
          variant="filled" sx={{ width: "100%", mb: 5 }} />
        
        <TextField id="filled-basic" label="Contact Number"
          
          error={Boolean(errors.phone)}
          // eslint-disable-next-line no-extra-boolean-cast
          helperText = {Boolean(errors.phone) ?  "Enter a vaild phone number" : "Required Falied"}
          {...register("phone", { pattern: /^[+]?\d{1,3}[-\s.]?\d{1,14}$/ })}
          
          variant="filled" sx={{ width: "100%", mb: 5 }}
        />

        <TextField id="filled-basic" label="Adderss 1"      variant="filled" sx={{width: "100%", mb: 5 }} />
        <TextField id="filled-basic" label="Adderss 2"      variant="filled" sx={{width: "100%", mb: 5 }} />

        
        <TextField
          id="filled-select-currency"
          select
          label="Role"
          defaultValue="user"
          // helperText="Please select your currency"
          variant="filled"
          sx={{width: "100%"}}
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
            
        
        <Box style={{ textAlign: 'right' }}>
          <Button variant="contained" type="submit" style={{ marginTop: '15px', textTransform: 'capitalize' }}>
            Create New User
          </Button>
        </Box>


        <Snackbar open={open}
          anchorOrigin={{ vertical: "top", horizontal: "right"}}
          autoHideDuration={2000}
          onClose={handleClose}>
          <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
            Account Created Successfuly
          </Alert>
        </Snackbar>


      </Box>

    </>
  );
}
