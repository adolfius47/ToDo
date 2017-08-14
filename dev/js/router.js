"use strict";
import React from "react";
import {hashHistory, IndexRoute, Route, Router} from "react-router";

import App from './Components/App'


import ToDo from './Components/ToDo'
const createRouter = (getState, dispatch) => {


    return (
        <Router history={hashHistory}>
            <Route path='/' component={App}>
                <IndexRoute component={ToDo}/>
            </Route>
        </Router>
    )
}

export default createRouter;
