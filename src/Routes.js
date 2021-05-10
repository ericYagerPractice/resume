import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Resume from './pages/Resume';

function Routes() {
    return (
      <>
      <Switch>
        <Route exact path="/UserStories" component={Home} />
        <Route exact path="/:PageID" component={Resume} />
        <Route
          render={function() {
            return <h1>Not Found</h1>;
          }}
        />
      </Switch>
      </>
    )
}

export default Routes;
