import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route
} from "react-router-dom";

import PageNotFound from "./views/PageNotFound";
import Header from '../Header/header.container';
import Product from '../Product/product.container';
import Cart from '../Cart/cart.container';

import * as routes from '../../constants/router.constants';

import 'bootstrap/dist/css/bootstrap.min.css';
import './app.css';

const App = () => (
    <Router>
        <div className="app">
            <Header/>
            <div className="content">
                <Switch>
                    <Route exact path={routes.PRODUCT_ROUTE} component={Product}/>
                    <Route exact path={routes.CART_ROUTE} component={Cart}/>
                    <Route exact path={routes.HOME_ROUTE} component={Product}/>
                    <Route component={PageNotFound}/>
                </Switch>
            </div>
        </div>
    </Router>
);

export default App;
