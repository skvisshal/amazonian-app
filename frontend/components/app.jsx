import React from 'react';
import { Provider } from 'react-redux';
import {
    Route,
    Redirect,
    Switch,
    HashRouter
} from 'react-router-dom';

import NavigationBarContainer from './navigation_bar/navigation_bar_container';
import SignUpFormContainer from './session_form/signup_form_container';
import LogInFormContainer from './session_form/login_form_container';

import ProductIndexContainer from "./product_index/product_index_container";
import ProductShowContainer from './product_show/product_show_container';

import { AuthRoute, ProtectedRoute } from '../util/route_util';

const App = () => (
    <div>
        <header>
            <NavigationBarContainer />
        </header>
        <Switch>
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/products" component={ProductIndexContainer} />
            <Route path="/products/:productId" component={ProductShowContainer} />
        </Switch>
    </div>
);

export default App;