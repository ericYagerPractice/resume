import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';
import HLD from './pages/HLD';
import Login from './pages/Login';

function Routes() {
    return (
      <>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/Resume" component={Resume} />
        <Route exact path="/HLD" component={HLD} />
        <Route exact path="/Login" component={Login} />
        <Route
          render={function() {
            return <h1>The page you are looking for wasn't found</h1>;
          }}
        />
      </Switch>
      </>
    )
}

export default Routes;
