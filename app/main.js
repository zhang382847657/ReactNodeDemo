/**
 * Created by zhouxin on 2018/2/5.
 */

import React from 'react';
import { Router, HashRouter,Route ,IndexRoute,Switch,Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import Login from './views/login';
import Main from './views/main';
import Register from './views/register';

import createHashHistory from 'history/createHashHistory';


ReactDOM.render(
    <Router history={createHashHistory()} >
        <div>
            <Route exact path="/" component={Main} />
            <Route path="/login" component={Login}/>
            <Route path="/register" component={Register}/>
        </div>
    </Router>
   , document.getElementById('root'));

