import { React } from 'react'
import { useSelector } from "react-redux"
import { useDispatch } from 'react-redux';

import { Link, useNavigate } from 'react-router-dom'

import AppBar from '@mui/material/AppBar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';
import { Toolbar } from '@mui/material';

import { signOut } from "../../store/actions/authActions";

const MyStyledLink = styled(Link)({
    color: '#fafafa',
    textDecoration: 'none',
    padding: 1,
    backgroundColor: '#1976d2',
  });


const NavBar = () => {
    let navigate = useNavigate()

    const dispatch = useDispatch();
    const state = useSelector(state => state)
    console.log(state)
    const user = useSelector((state) => state.auth);

    const handleSignOut = () => {
    dispatch(signOut());
    navigate("/", { replace: true });
  };

    return (
        <>
        <div sx={{ flexGrow: 1 }}>
            <AppBar sx={{borderRadius: 2}} position="static">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        <MyStyledLink to="/">
                            Todo App
                        </MyStyledLink>
                    </Typography>

                    {user._id ? (
                    <>
                    <Typography variant="subtitle2" sx={{ flexGrow: 1 }}>
                        Logged in as {user.name}
                    </Typography>

                    <Button edge="end" color="inherit" onClick = {handleSignOut()}>
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <MyStyledLink to="/">
                                Sign Out
                            </MyStyledLink>
                        </Typography>
                    </Button>
                    </>
                    ) : (
                    <>
                    <Button edge="end" color="inherit" >
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                        <MyStyledLink to="/signin">
                                Sign In
                            </MyStyledLink>
                        </Typography>  
                    </Button>

                    <Button edge="end" color="inherit">
                        <Typography variant="h6" sx={{ flexGrow: 1 }}>
                            <MyStyledLink to="/signup">
                                Sign Up
                            </MyStyledLink>
                        </Typography>  
                    </Button>
                    </>
                    )}
                </Toolbar>
            </AppBar>
        </div>
        </>
      );

}

export default NavBar;