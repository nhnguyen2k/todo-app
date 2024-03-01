import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Container from '@mui/material/Container';
import { styled } from '@mui/system';

import Todos from './components/todos/Todos.jsx'
import SignIn from './components/auth/SignIn.jsx'
import SignUp from './components/auth/SignUp.jsx'
import NavBar from './components/navBar/NavBar.jsx'
import { loadUser } from "./store/actions/authActions.js"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

const StyledContainer = styled(Container)({
  margin: '30px auto',
})

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);


  return (
    <>
    <BrowserRouter>
      <ToastContainer/>
        <Container maxWidth="md">
            <NavBar />
            <StyledContainer>
            <Routes path="/">
              <Route path="signin" element={<SignIn />} />
              <Route path="signup" element={<SignUp />} />
              <Route path="" element={<Todos />} />
            </Routes>
            </StyledContainer>
        </Container>
    </BrowserRouter>
    </>
  );
}

export default App;
