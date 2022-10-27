import React, {useContext} from 'react';
import {Routes, Route, Navigate} from "react-router-dom";
import {privateRoutes, publicRoutes} from "../routes";
import Chat from "./Chat";
import {CHAT_ROUTE, LOGIN_ROUTE} from "../utils/const";
import {Context} from "../index";
import {useAuthState} from "react-firebase-hooks/auth";


const AppRouter = () => {
    const {auth} = useContext(Context)
    const [user] = useAuthState(auth)
    console.log(user)
    return (
        user ?
                <Routes>
                    {privateRoutes.map(route =>
                        <Route key={route.path} path={route.path} element={<route.element/>} />
                    )}
                    <Route path={'/*'} element={<Navigate to={CHAT_ROUTE} />} />
                </Routes>
        :
            <Routes>
                {publicRoutes.map(route =>
                    <Route key={route.path} path={route.path} element={<route.element/>} />
                )}
                <Route path={'/*'} element={<Navigate to={LOGIN_ROUTE} />} />
            </Routes>
    );
};

export default AppRouter;