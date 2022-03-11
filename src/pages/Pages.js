import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home'
import 

function Pages() {
    return (
        <Switch>
            <Route 
                exact path="/" component={routerProps => <Home routerInfo={routerProps} /> }
            />
            <Route 
                exact path="/meet-dr-soden" component={routerProps => <Meet Dr Soden routerInfo={routerProps} /> } 
            />
            <Route 
                exact path="/treatment" component={ routerProps => <Treatment routerInfo={routerProps} /> } 
                />
            <Route exact path="/scheduling" component={routerProps => <Scheduling routerProps={routerProps} /> } />
        </Switch>
    );
}

export default Pages;
