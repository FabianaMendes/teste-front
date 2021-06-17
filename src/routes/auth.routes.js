import React from 'react';
import { Switch, Route } from 'react-router-dom';

import LogIn from '../pages/LogIn';

export default function AuthRoutes() {
    return(
            <Switch>
                <Route path="/" component={LogIn} />
            </Switch>
    );
};