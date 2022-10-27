import AppBar from '@mui/material/AppBar/AppBar';
import Toolbar from '@mui/material/Toolbar/Toolbar';
import React, {useContext} from 'react';
import {Button, Grid} from "@mui/material";
import {NavLink} from "react-router-dom";
import { LOGIN_ROUTE } from '../utils/const';
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";

const Navbar = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)

    return (
        <AppBar position="static">
            <Toolbar>
                <Grid container justifyContent={"flex-end"}>
                    {user ?
                        <Button onClick={() => auth.signOut()} variant={'outlined'} color={'inherit'}>Выйти</Button>
                        :  <NavLink style={{color:'inherit', textDecoration:'none'}} to={LOGIN_ROUTE}>
                            <Button variant={'outlined'} color="inherit">Логин</Button>
                        </NavLink>

                    }
                </Grid>
            </Toolbar>
        </AppBar>
    );
};

export default Navbar;