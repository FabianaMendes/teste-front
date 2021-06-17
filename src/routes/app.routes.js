import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from '../pages/Home';
import NotFound from '../pages/NotFound';

export default function AppRoutes() {
    return(
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="*" component={NotFound} status={404}/>
            </Switch>
    );
};