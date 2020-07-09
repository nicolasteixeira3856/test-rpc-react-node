import React from 'react';
import {Route, BrowserRouter} from 'react-router-dom';

import Index from './pages/Index'

const Routes = () => {
    return (
        <BrowserRouter>
            <Route component={Index} path="/" exact></Route>
        </BrowserRouter>
    )
}

export default Routes;