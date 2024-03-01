import React, { useState } from 'react'
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom";

import { signIn } from "../../store/actions/authActions.js"

import { FormControl, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/system';

const MyStyledForm = styled(FormControl)({
    margin: "20px",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: 'flex',
    justifyContent: "space-between"
})

const SignIn = () => {

    const dispatch = useDispatch()
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const [creds, setCreds] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(signIn(creds.email, creds.password));
        setCreds({
            email:"",
            password:"",
        })
        if (auth) {
            navigate('/')
        }
    }

    return(
        <>
            <MyStyledForm
            noValidate
            autoComplete="off"
            onSubmit = {handleSubmit}
            >
                <Typography variant="h5">
                    Sign In
                </Typography>
                <TextField 
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    value = {creds.email}
                    onChange = {(e) => setCreds({...creds, email: e.target.value})}
                    sx={{ margin: "10px auto" }}
                />
                <TextField 
                    id="enter-password"
                    type="password"
                    label="password"
                    variant="outlined"
                    fullWidth
                    value = {creds.password}
                    onChange = {(e) => setCreds({...creds, password: e.target.value})}
                    sx={{ margin: "10px auto" }}
                />
                <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ marginTop: "10px" }}
                >
                    Sign In
                </Button>
            </MyStyledForm>
        </>
    );

}

export default SignIn;