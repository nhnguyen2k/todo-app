import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from "react-router-dom";


import { FormControl, Typography, TextField, Button } from '@mui/material'
import { styled } from '@mui/system';

import { signUp } from "../../store/actions/authActions"

const MyStyledForm = styled(FormControl)({
    margin: "20px",
    padding: "20px",
    borderRadius: "9px",
    boxShadow: "0px 0px 12px -3px #000000",
    display: 'flex',
    justifyContent: "space-between"
})

const SignUp = () => {
    
    const auth = useSelector((state) => state.auth);
    const navigate = useNavigate()

    const dispatch = useDispatch()
    const [user, setUser] = useState({
        name: "",
        email: "",
        password: "",
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(signUp(user));
        setUser({ name: "", email: "", password: "" })
        if (auth) {
            navigate('/')
        }
    };
    

    return(
        <>
            <MyStyledForm
            noValidate
            autoComplete="off"
            onSubmit = {handleSubmit}
            >
                <Typography variant="h5">
                    Sign Up
                </Typography>
                <TextField 
                    id="enter-name"
                    label="enterName"
                    variant="outlined"
                    fullWidth
                    value = { user.name }
                    onChange = {(e) => setUser({...user, name: e.target.value})}
                    sx={{ margin: "10px auto" }}
                />
                <TextField 
                    id="enter-email"
                    label="enterEmail"
                    variant="outlined"
                    fullWidth
                    value = { user.email }
                    onChange = {(e) => setUser({...user, email: e.target.value})}
                    sx={{ margin: "10px auto" }}
                />
                <TextField 
                    id="enter-password"
                    type="password"
                    label="password"
                    variant="outlined"
                    fullWidth
                    value = { user.password }
                    onChange = {(e) => setUser({...user, password: e.target.value})}
                    sx={{ margin: "10px auto" }}
                />
                <Button
                variant="contained"
                color="primary"
                onClick={handleSubmit}
                sx={{ marginTop: "10px" }}
                >
                    Sign Up
                </Button>
            </MyStyledForm>
        </>
    );

}

export default SignUp;