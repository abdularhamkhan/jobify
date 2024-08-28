
import Signup from '@/Pages/Layouts/Auth/AuthPages/Signup';
import WebLayout from '../Pages/WebLayout';
import NotFound from './404';
import AuthLayout from '@/Pages/Layouts/Auth/AuthLayout';
import Login from '@/Pages/Layouts/Auth/AuthPages/Login';

let routes = [
    {
        path: '/',
        element: <WebLayout />,
        chidren:[
            
        ]

    },
    {
        path: 'sign-up',
        element: <Signup />,

    },
    {
        path: 'log-in',
        element: <Login />,

    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;
