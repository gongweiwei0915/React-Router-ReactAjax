import React from 'react';
import {render} from 'react-dom';
import App from './comments/App';
import About from './comments/About';
import Home from './comments/Home';
import Repos from './comments/Repos';
import Repo from './comments/Repo'
import {Router,Route,hashHistory,IndexRoute} from "react-router"
render((
    <Router history = {hashHistory}>
        <Route path="/" component={App}>
            <IndexRoute component={Home}/>
            <Route path="/About" component={About}/>
            <Route path="/Repos" component={Repos}>
                <Route path="/repos/:username/:repName" component={Repo}></Route>
            </Route>
        </Route>
    </Router>
),document.getElementById("root"));