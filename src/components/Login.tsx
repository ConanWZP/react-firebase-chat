import React, {useContext} from 'react';
import {Box, Button, Container, Grid} from "@mui/material";
import {Context} from "../index";

import firebase from "firebase/compat/app";

const Login = () => {

    const {auth} = useContext(Context)

    const login = async () => {
        const provider = new firebase.auth.GoogleAuthProvider()
        const {user} = await auth.signInWithPopup(provider)
        console.log(user)
    }

    return (
        <Container>
            <Grid container style={{height: window.innerHeight - 64}} alignItems={'center'} justifyContent={'center'}>
                <Grid container
                    style={{width: 400, background:'lightgrey'}}
                alignItems={'center'}
                direction={'column'}>
                    <Box p={5}>
                        <Button onClick={login} variant={'outlined'} color="inherit">Войти с помощью Google</Button>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;