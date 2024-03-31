import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';

const route = createBrowserRouter([
    {
        path:"/",
        element:<App></App>,
        children:[
            {
                path:"/signin",
                element:<SignIn></SignIn>
            },
            {
                path:"/signup",
                element:<SignUp></SignUp>
            }
        ]
    }
])

export default route;