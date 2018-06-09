import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Dashboard from './Component/Dashboard/Dashboard';
import Product from './Component/Product/Product';

export default(
    <Switch>
        <Route exact path="/" component={Dashboard} />
        <Route path='/products/:id' component={Product} />
    </Switch>
)