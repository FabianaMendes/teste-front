import React from 'react';
import { BrowserRouter} from 'react-router-dom';
import { useAuth } from '../contexts/auth';

import AppRoutes from './app.routes';
import AuthRoutes from './auth.routes';


export default function Routes() {
    const { logged } = useAuth();
    
    return (
        <BrowserRouter>
            { logged ? <AppRoutes/> : <AuthRoutes/> }
        </BrowserRouter>
    );
}