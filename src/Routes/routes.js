
import Signup from '@/Pages/Layouts/Auth/Signup/Signup';
import WebLayout from '../Pages/WebLayout';
import NotFound from './404';
import Login from '@/Pages/Layouts/Auth/Login/Login';
import AppLayout from '@/Pages/Layouts/App/AppLayout';

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
        path: 'app',
        element: <AppLayout />,

    },
    {
        path: '*',
        element: <NotFound />,
    },
];

export default routes;
